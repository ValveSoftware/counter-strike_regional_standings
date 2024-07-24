### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, Jackinho, nilo, Plopski, Sapec<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [77](../standings_global.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
Final Rank Value:  950.1<br />
<br />
Final Rank Value (950.1) = Starting Rank Value (924.8) + Head To Head Adjustments (25.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.437[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.197[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 924.8
- 400 + ( ( 0.259 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 924.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |       48 | 2024-07-23 | RUBY              | L   | 1.000      | -            | -                | -                | -         |   -17.80 | adamb, Jackinho, nilo, Plopski, Sapec |
|           66 |       66 | 2024-07-22 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -17.50 | adamb, Jackinho, nilo, Plopski, Sapec |
|           65 |      167 | 2024-07-19 | Sampi             | W   | 1.000      | 0.435        | 0.037 (0.016)    | 0.994 (0.432)    | 0 (0.000) |    12.04 | adamb, Jackinho, nilo, Plopski, Sapec |
|           64 |      223 | 2024-07-18 | BC.Game           | L   | 1.000      | -            | -                | -                | -         |   -27.52 | adamb, Jackinho, nilo, Plopski, Sapec |
|           63 |      346 | 2024-07-16 | Endpoint          | W   | 1.000      | 0.435        | 0.015 (0.007)    | 0.466 (0.203)    | 0 (0.000) |    10.64 | adamb, Jackinho, nilo, Plopski, Sapec |
|           62 |     1410 | 2024-05-23 | Space             | L   | 0.785      | -            | -                | -                | -         |   -16.19 | abdi, adamb, Jackinho, nilo, Plopski  |
|           61 |     1515 | 2024-05-20 | Zero Tenacity     | L   | 0.767      | -            | -                | -                | -         |    -9.91 | adamb, Jackinho, nilo, Plopski, ztr   |
|           60 |     1569 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.754      | 0.500        | 0.287 (0.108)    | 0.537 (0.202)    | 0 (0.000) |    22.91 | adamb, Jackinho, nilo, Plopski, ztr   |
|           59 |     1656 | 2024-05-16 | Rare Atom         | W   | 0.739      | 0.500        | -                | 0.354 (0.131)    | 0 (0.000) |     3.25 | adamb, Jackinho, nilo, Plopski, ztr   |
|           58 |     1840 | 2024-05-11 | BetBoom           | L   | 0.706      | -            | -                | -                | -         |    -1.83 | adamb, Jackinho, nilo, Plopski, ztr   |
|           57 |     1855 | 2024-05-10 | EYEBALLERS        | W   | 0.700      | 0.435        | -                | 0.571 (0.174)    | 0 (0.000) |     8.89 | adamb, Jackinho, nilo, Plopski, ztr   |
|           56 |     1980 | 2024-05-04 | AMKAL             | L   | 0.658      | -            | -                | -                | -         |    -6.21 | adamb, Jackinho, nilo, susp, ztr      |
|           55 |     1995 | 2024-05-03 | Zero Tenacity     | W   | 0.652      | 0.435        | 0.173 (0.049)    | 1.000 (0.283)    | 0 (0.000) |    12.51 | adamb, Jackinho, nilo, susp, ztr      |
|           54 |     2015 | 2024-05-02 | Sangal            | W   | 0.646      | 0.435        | 0.195 (0.055)    | 0.860 (0.241)    | 0 (0.000) |    13.45 | adamb, Jackinho, nilo, susp, ztr      |
|           53 |     2173 | 2024-04-25 | Nexus             | L   | 0.600      | -            | -                | -                | -         |   -12.68 | adamb, Jackinho, nilo, susp, ztr      |
|           52 |     2217 | 2024-04-23 | Alliance          | W   | 0.586      | 0.384        | -                | 0.328 (0.074)    | 0 (0.000) |     7.06 | adamb, Jackinho, nilo, p1ke, susp     |
|           51 |     2322 | 2024-04-19 | FURIA             | L   | 0.560      | -            | -                | -                | -         |    -0.24 | adamb, Jackinho, Plopski, susp, ztr   |
|           50 |     2360 | 2024-04-18 | Imperial          | L   | 0.553      | -            | -                | -                | -         |    -1.67 | adamb, Jackinho, Plopski, susp, ztr   |
|           49 |     2642 | 2024-04-09 | ex-Guild Eagles   | L   | 0.492      | -            | -                | -                | -         |   -10.62 | adamb, Jackinho, nilo, susp, ztr      |
|           48 |     2658 | 2024-04-08 | Aurora            | L   | 0.487      | -            | -                | -                | -         |    -0.51 | adamb, Jackinho, nilo, susp, ztr      |
|           47 |     2670 | 2024-04-08 | 9 Pandas          | L   | 0.486      | -            | -                | -                | -         |    -6.40 | adamb, Jackinho, nilo, susp, ztr      |
|           46 |     2695 | 2024-04-07 | EYEBALLERS        | W   | 0.480      | 0.330        | -                | 0.571 (0.091)    | 0 (0.000) |     5.87 | adamb, Jackinho, nilo, susp, ztr      |
|           45 |     2704 | 2024-04-07 | Johnny Speeds     | W   | 0.478      | 0.330        | 0.154 (0.024)    | 0.858 (0.135)    | 0 (0.000) |    13.17 | adamb, Jackinho, nilo, susp, ztr      |
|           44 |     2720 | 2024-04-06 | Young Gods        | W   | 0.471      | -            | -                | -                | -         |     3.15 | adamb, Jackinho, nilo, susp, ztr      |
|           43 |     2772 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.459      | -            | -                | -                | -         |    -0.24 | adamb, Jackinho, nilo, susp, ztr      |
|           42 |     2798 | 2024-04-03 | Monte             | W   | 0.454      | -            | -                | -                | -         |     8.94 | adamb, Jackinho, nilo, susp, ztr      |
|           41 |     2811 | 2024-04-03 | FAVBET            | W   | 0.453      | -            | -                | -                | -         |     4.33 | adamb, Jackinho, nilo, susp, ztr      |
|           40 |     2845 | 2024-04-02 | B8                | W   | 0.447      | 0.143        | 0.206 (0.013)    | -                | -         |     9.78 | adamb, Jackinho, nilo, susp, ztr      |
|           39 |     2851 | 2024-04-02 | Aurora            | L   | 0.446      | -            | -                | -                | -         |    -0.39 | adamb, Jackinho, nilo, susp, ztr      |
|           38 |     2867 | 2024-04-01 | PARIVISION        | L   | 0.440      | -            | -                | -                | -         |    -4.87 | adamb, Jackinho, nilo, susp, ztr      |
|           37 |     2934 | 2024-03-27 | Aurora            | L   | 0.408      | -            | -                | -                | -         |    -0.34 | adamb, Jackinho, nilo, susp, ztr      |
|           36 |     2940 | 2024-03-27 | NAVI Junior       | W   | 0.407      | -            | -                | -                | -         |     2.56 | adamb, Jackinho, nilo, susp, ztr      |
|           35 |     3143 | 2024-03-15 | kONO              | L   | 0.327      | -            | -                | -                | -         |    -6.95 | adamb, Jackinho, nilo, susp, ztr      |
|           34 |     3180 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.319      | -            | -                | -                | -         |    -4.50 | adamb, Jackinho, nilo, susp, ztr      |
|           33 |     3214 | 2024-03-13 | HEROIC            | L   | 0.313      | -            | -                | -                | -         |    -0.25 | adamb, Jackinho, nilo, susp, ztr      |
|           32 |     3237 | 2024-03-12 | B8                | W   | 0.307      | 0.143        | 0.206 (0.009)    | -                | -         |     6.83 | adamb, Jackinho, nilo, susp, ztr      |
|           31 |     3245 | 2024-03-12 | Apeks             | W   | 0.306      | -            | -                | -                | -         |     5.19 | adamb, Jackinho, nilo, susp, ztr      |
|           30 |     3255 | 2024-03-11 | ex-Preasy         | W   | 0.301      | -            | -                | -                | -         |     3.54 | adamb, Jackinho, nilo, susp, ztr      |
|           29 |     3269 | 2024-03-11 | ENCE              | L   | 0.299      | -            | -                | -                | -         |    -0.61 | adamb, Jackinho, nilo, susp, ztr      |
|           28 |     3277 | 2024-03-10 | Spirit            | L   | 0.294      | -            | -                | -                | -         |    -0.04 | adamb, Jackinho, nilo, susp, ztr      |
|           27 |     3304 | 2024-03-09 | Monte             | W   | 0.286      | 0.535        | 0.083 (0.013)    | -                | -         |     6.00 | adamb, Jackinho, nilo, susp, ztr      |
|           26 |     3311 | 2024-03-09 | EYEBALLERS        | L   | 0.286      | -            | -                | -                | -         |    -4.96 | adamb, Jackinho, nilo, susp, ztr      |
|           25 |     3317 | 2024-03-09 | Lemondogs         | W   | 0.285      | -            | -                | -                | -         |     0.41 | adamb, Jackinho, nilo, susp, ztr      |
|           24 |     3335 | 2024-03-08 | Secret            | W   | 0.279      | -            | -                | -                | -         |     0.87 | adamb, Jackinho, nilo, susp, ztr      |
|           23 |     3376 | 2024-03-06 | Falcons           | W   | 0.268      | 0.535        | 0.276 (0.039)    | -                | -         |     7.96 | adamb, Jackinho, nilo, susp, ztr      |
|           22 |     3456 | 2024-03-03 | The Chosen Few    | W   | 0.248      | -            | -                | -                | -         |     1.57 | adamb, Jackinho, nilo, susp, ztr      |
|           21 |     3465 | 2024-03-03 | ILIN              | W   | 0.247      | -            | -                | -                | -         |     0.39 | adamb, Jackinho, nilo, susp, ztr      |
|           20 |     3469 | 2024-03-03 | RUSH B            | W   | 0.246      | -            | -                | -                | -         |     2.87 | adamb, Jackinho, nilo, susp, ztr      |
|           19 |     3478 | 2024-03-03 | ECLOT             | L   | 0.246      | -            | -                | -                | -         |    -1.74 | adamb, Jackinho, nilo, susp, ztr      |
|           18 |     3524 | 2024-02-29 | Endpoint          | W   | 0.226      | -            | -                | -                | -         |     3.24 | adamb, Jackinho, nilo, susp, ztr      |
|           17 |     3561 | 2024-02-27 | ex-Guild Eagles   | L   | 0.213      | -            | -                | -                | -         |    -4.10 | adamb, Jackinho, nilo, susp, ztr      |
|           16 |     3933 | 2024-02-11 | Apeks             | W   | 0.108      | -            | -                | -                | -         |     1.85 | adamb, Jackinho, nilo, susp, ztr      |
|           15 |     3938 | 2024-02-11 | ex-Sprout         | W   | 0.106      | -            | -                | -                | -         |     0.33 | adamb, Jackinho, nilo, susp, ztr      |
|           14 |     3946 | 2024-02-10 | FURIA             | W   | 0.100      | -            | -                | -                | -         |     3.12 | adamb, Jackinho, nilo, susp, ztr      |
|           13 |     3949 | 2024-02-10 | Apeks             | L   | 0.099      | -            | -                | -                | -         |    -1.42 | adamb, Jackinho, nilo, susp, ztr      |
|           12 |     3950 | 2024-02-10 | FURIA             | W   | 0.099      | -            | -                | -                | -         |     3.09 | adamb, Jackinho, nilo, susp, ztr      |
|           11 |     3985 | 2024-02-07 | ex-Sprout         | W   | 0.079      | -            | -                | -                | -         |     0.24 | adamb, Jackinho, nilo, susp, ztr      |
|           10 |     3993 | 2024-02-06 | Into the Breach   | L   | 0.073      | -            | -                | -                | -         |    -1.92 | adamb, Jackinho, nilo, susp, ztr      |
|            9 |     4006 | 2024-02-05 | TSM               | L   | 0.065      | -            | -                | -                | -         |    -1.62 | adamb, Jackinho, nilo, susp, ztr      |
|            8 |     4013 | 2024-02-04 | 500               | L   | 0.061      | -            | -                | -                | -         |    -1.48 | adamb, Jackinho, nilo, susp, ztr      |
|            7 |     4019 | 2024-02-04 | TMVG              | W   | 0.060      | -            | -                | -                | -         |     0.17 | adamb, Jackinho, nilo, susp, ztr      |
|            6 |     4030 | 2024-02-04 | DUSTY             | W   | 0.058      | -            | -                | -                | -         |     0.33 | adamb, Jackinho, nilo, susp, ztr      |
|            5 |     4060 | 2024-02-03 | Sangal            | W   | 0.051      | -            | -                | -                | -         |     1.19 | adamb, Jackinho, nilo, susp, ztr      |
|            4 |     4072 | 2024-02-02 | EYEBALLERS        | W   | 0.047      | -            | -                | -                | -         |     0.70 | adamb, Jackinho, nilo, susp, ztr      |
|            3 |     4074 | 2024-02-02 | ex-Preasy         | W   | 0.047      | -            | -                | -                | -         |     0.52 | adamb, Jackinho, nilo, susp, ztr      |
|            2 |     4111 | 2024-02-01 | Sampi             | W   | 0.039      | -            | -                | -                | -         |     0.58 | adamb, Jackinho, nilo, susp, ztr      |
|            1 |     4162 | 2024-01-29 | BLEED             | W   | 0.019      | -            | -                | -                | -         |     0.35 | adamb, Jackinho, nilo, susp, ztr      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,174.80)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.713 | $2,000.00      | $1,426.92       |
| 2024-05-04 |      0.660 | $5,000.00      | $3,298.64       |
| 2024-04-20 |      0.568 | $5,000.00      | $2,839.83       |
| 2024-04-07 |      0.480 | $6,110.00      | $2,932.45       |
| 2024-03-10 |      0.294 | $12,500.00     | $3,676.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
