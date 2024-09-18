### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [86](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [63]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  913.9<br />
<br />
Final Rank Value (913.9) = Starting Rank Value (865.7) + Head To Head Adjustments (48.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.408[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.7
- 400 + ( ( 0.238 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 865.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      858 | 2024-08-23 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -15.95 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      888 | 2024-08-22 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -2.52 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      916 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.14 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      947 | 2024-08-21 | Sashi             | W   | 1.000      | 0.143        | 0.164 (0.023)    | 0.938 (0.134)    | 0 (0.000) |    22.98 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1303 | 2024-08-09 | Sashi             | L   | 0.932      | -            | -                | -                | -         |    -7.31 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1317 | 2024-08-08 | Permitta          | W   | 0.927      | 0.426        | 0.031 (0.012)    | 0.979 (0.387)    | 0 (0.000) |    16.11 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1615 | 2024-07-31 | B8                | L   | 0.875      | -            | -                | -                | -         |    -5.74 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1664 | 2024-07-30 | Space             | W   | 0.868      | 0.500        | 0.004 (0.002)    | 0.497 (0.216)    | 0 (0.000) |    11.32 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1699 | 2024-07-29 | ARCRED            | L   | 0.861      | -            | -                | -                | -         |   -12.42 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     2024 | 2024-07-19 | Nexus             | L   | 0.794      | -            | -                | -                | -         |   -17.33 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     2057 | 2024-07-18 | Nemiga            | L   | 0.788      | -            | -                | -                | -         |    -5.24 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     2136 | 2024-07-17 | Verdant           | W   | 0.781      | 0.333        | 0.018 (0.005)    | 0.365 (0.095)    | 0 (0.000) |    10.13 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2192 | 2024-07-16 | Aurora            | L   | 0.775      | -            | -                | -                | -         |    -2.32 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2243 | 2024-07-15 | Betera            | W   | 0.768      | -            | -                | -                | 0 (0.000) |     3.81 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2560 | 2024-06-13 | ex-Enterprise     | W   | 0.555      | 0.379        | 0.040 (0.008)    | 0.654 (0.137)    | 0 (0.000) |     8.92 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     2596 | 2024-06-12 | Rebels            | W   | 0.548      | 0.379        | 0.063 (0.013)    | 0.682 (0.142)    | 0 (0.000) |    11.02 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     2616 | 2024-06-11 | ECLOT             | W   | 0.541      | 0.379        | 0.081 (0.017)    | 0.758 (0.155)    | 0 (0.000) |    13.60 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     2819 | 2024-06-07 | B8                | L   | 0.514      | -            | -                | -                | -         |    -3.49 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     2823 | 2024-06-07 | Aurora            | L   | 0.513      | -            | -                | -                | -         |    -1.19 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     2923 | 2024-06-05 | The Prodigies     | W   | 0.501      | -            | -                | -                | 0 (0.000) |     1.98 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     3006 | 2024-06-03 | GL Academy        | W   | 0.488      | -            | -                | -                | -         |     3.60 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3112 | 2024-05-30 | Rebels            | L   | 0.462      | -            | -                | -                | -         |    -5.33 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3292 | 2024-05-22 | System5           | W   | 0.408      | -            | -                | -                | -         |     2.59 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3340 | 2024-05-21 | EYEBALLERS        | W   | 0.401      | -            | -                | -                | -         |     4.90 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     3379 | 2024-05-20 | Nexus             | W   | 0.394      | 0.379        | 0.009 (0.001)    | 0.542 (0.081)    | -         |     4.45 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     3549 | 2024-05-15 | Norway            | W   | 0.361      | -            | -                | -                | -         |     2.37 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     3608 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.355      | 0.500        | 0.110 (0.019)    | 0.792 (0.140)    | -         |     8.22 | Aaron, Bibu, DGL, kory, Porya      |
|            7 |     3832 | 2024-05-04 | FlyQuest          | L   | 0.286      | -            | -                | -                | -         |    -2.86 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            6 |     3847 | 2024-05-03 | BIG               | L   | 0.280      | -            | -                | -                | -         |    -0.40 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            5 |     3867 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.274      | 0.889        | 0.230 (0.056)    | 0.381 (0.093)    | 1 (0.274) |     8.23 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     3917 | 2024-04-30 | Complexity        | L   | 0.260      | -            | -                | -                | -         |    -0.06 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4127 | 2024-04-20 | EYEBALLERS        | L   | 0.195      | -            | -                | -                | -         |    -3.69 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4666 | 2024-04-03 | SAW               | L   | 0.081      | -            | -                | -                | -         |    -0.07 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            1 |     4721 | 2024-04-01 | RUSH B            | W   | 0.068      | -            | -                | -                | -         |     1.02 | Aaron, Bibu, Ciocardau, DGL, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,698.08)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.801 | $1,250.00      | $1,001.16       |
| 2024-06-13 |      0.555 | $10,895.00     | $6,047.94       |
| 2024-06-09 |      0.528 | $500.00        | $264.03         |
| 2024-05-12 |      0.341 | $7,000.00      | $2,384.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
