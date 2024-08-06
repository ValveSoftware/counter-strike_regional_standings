### Roster Details<br />
Team Name: Nexus<br />
Roster: 7kick, BTN, Ciocardau, ragga, XELLOW<br />
Global Rank: [129](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
<br />
Final Rank Value:  784.7<br />
<br />
Final Rank Value (784.7) = Starting Rank Value (841.8) + Head To Head Adjustments (-57.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.153[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.8
- 400 + ( ( 0.215 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 841.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       11 | 2024-08-06 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |    -6.79 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           61 |      232 | 2024-07-31 | EYEBALLERS        | W   | 1.000      | 0.143        | -                | 0.488 (0.070)    | 0 (0.000) |    15.79 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           60 |      300 | 2024-07-29 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -4.69 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           59 |      431 | 2024-07-25 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -14.04 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           58 |      575 | 2024-07-20 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.99 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           57 |      618 | 2024-07-19 | PERA              | W   | 1.000      | 0.333        | 0.047 (0.016)    | 0.435 (0.145)    | 0 (0.000) |    23.71 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           56 |      659 | 2024-07-18 | TSM               | W   | 1.000      | 0.333        | 0.040 (0.013)    | 0.500 (0.167)    | 0 (0.000) |    26.19 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           55 |      675 | 2024-07-18 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -6.31 | 7kick, BTN, Ciocardau, Ed1m, ragga   |
|           54 |      752 | 2024-07-17 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -11.01 | 7kick, BTN, Ed1m, ragga, XELLOW      |
|           53 |      787 | 2024-07-16 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.29 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           52 |      846 | 2024-07-15 | SINNERS           | W   | 1.000      | 0.333        | 0.047 (0.016)    | 0.800 (0.267)    | 0 (0.000) |    25.67 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           51 |      857 | 2024-07-14 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -10.69 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           50 |      877 | 2024-07-13 | Serbia            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.93 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           49 |      918 | 2024-07-10 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -10.46 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           48 |      950 | 2024-07-09 | Belarus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.03 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           47 |     1188 | 2024-06-12 | Permitta          | L   | 0.834      | -            | -                | -                | -         |    -6.29 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           46 |     1213 | 2024-06-11 | FAVBET            | L   | 0.827      | -            | -                | -                | -         |   -10.56 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           45 |     1308 | 2024-06-09 | EYEBALLERS        | L   | 0.812      | -            | -                | -                | -         |    -7.44 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           44 |     1338 | 2024-06-08 | Enterprise        | L   | 0.807      | -            | -                | -                | -         |    -7.97 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           43 |     1411 | 2024-06-07 | Astralis Talent   | W   | 0.800      | -            | -                | -                | 0 (0.000) |    12.63 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           42 |     1421 | 2024-06-07 | 9INE              | L   | 0.799      | -            | -                | -                | -         |    -8.10 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           41 |     1443 | 2024-06-06 | 3DMAX             | L   | 0.795      | -            | -                | -                | -         |    -0.40 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           40 |     1541 | 2024-06-05 | BLEED             | L   | 0.785      | -            | -                | -                | -         |    -0.75 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           39 |     1781 | 2024-05-27 | The Prodigies     | L   | 0.727      | -            | -                | -                | -         |   -18.13 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           38 |     1792 | 2024-05-27 | MOUZ NXT          | L   | 0.725      | -            | -                | -                | -         |    -3.92 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           37 |     1826 | 2024-05-25 | Permitta          | L   | 0.712      | -            | -                | -                | -         |    -7.53 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           36 |     1855 | 2024-05-23 | RUBY              | L   | 0.700      | -            | -                | -                | -         |    -6.46 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           35 |     1967 | 2024-05-20 | ALTERNATE aTTaX   | W   | 0.681      | 0.435        | 0.031 (0.009)    | 0.537 (0.159)    | 0 (0.000) |    14.56 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           34 |     1973 | 2024-05-20 | PERA              | L   | 0.680      | -            | -                | -                | -         |    -6.59 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           33 |     2070 | 2024-05-17 | Passion UA        | L   | 0.659      | -            | -                | -                | -         |    -4.44 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           32 |     2161 | 2024-05-15 | Space             | L   | 0.645      | -            | -                | -                | -         |    -9.05 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           31 |     2236 | 2024-05-13 | Sampi             | L   | 0.632      | -            | -                | -                | -         |    -6.92 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           30 |     2446 | 2024-05-03 | ENCE Academy      | L   | 0.565      | -            | -                | -                | -         |   -11.30 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     2491 | 2024-05-01 | Insilio           | L   | 0.552      | -            | -                | -                | -         |    -6.42 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     2523 | 2024-04-30 | fnatic            | L   | 0.544      | -            | -                | -                | -         |    -0.37 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     2528 | 2024-04-29 | Endpoint          | L   | 0.540      | -            | -                | -                | -         |    -7.11 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     2531 | 2024-04-29 | VP.Prodigy        | L   | 0.539      | -            | -                | -                | -         |    -8.02 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     2538 | 2024-04-29 | LEON              | W   | 0.538      | -            | -                | -                | 0 (0.000) |     5.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     2542 | 2024-04-29 | Enterprise        | W   | 0.538      | 0.384        | 0.039 (0.008)    | 0.641 (0.132)    | 0 (0.000) |     9.75 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     2559 | 2024-04-28 | brazylijski luz   | L   | 0.532      | -            | -                | -                | -         |    -8.67 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     2623 | 2024-04-25 | Metizport         | W   | 0.514      | 0.384        | -                | 0.510 (0.101)    | -         |    10.44 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2630 | 2024-04-25 | Grannys Knockers  | L   | 0.512      | -            | -                | -                | -         |   -10.10 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2652 | 2024-04-24 | AMKAL             | L   | 0.505      | -            | -                | -                | -         |    -2.62 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2673 | 2024-04-23 | Illuminar         | L   | 0.499      | -            | -                | -                | -         |   -13.33 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     2686 | 2024-04-22 | Zero Tenacity     | L   | 0.492      | -            | -                | -                | -         |    -3.60 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     2696 | 2024-04-21 | Young Ninjas      | W   | 0.487      | -            | -                | -                | -         |     5.80 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     2699 | 2024-04-21 | PARIVISION        | L   | 0.486      | -            | -                | -                | -         |    -3.78 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     2735 | 2024-04-20 | Permitta          | W   | 0.479      | 0.500        | 0.039 (0.009)    | 0.919 (0.220)    | -         |    10.32 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     2804 | 2024-04-18 | Young Ninjas      | L   | 0.467      | -            | -                | -                | -         |    -9.20 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     2838 | 2024-04-18 | Enterprise        | L   | 0.465      | -            | -                | -                | -         |    -6.14 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     3035 | 2024-04-10 | B8                | W   | 0.413      | 0.384        | 0.170 (0.027)    | 0.912 (0.145)    | -         |     9.82 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3178 | 2024-04-05 | SINNERS           | L   | 0.380      | -            | -                | -                | -         |    -1.85 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3321 | 2024-04-01 | Sashi             | W   | 0.352      | 0.384        | 0.184 (0.025)    | 0.958 (0.129)    | -         |     9.22 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3429 | 2024-03-25 | Sashi             | L   | 0.307      | -            | -                | -                | -         |    -1.57 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3690 | 2024-03-12 | Nemiga            | W   | 0.221      | 0.372        | 0.314 (0.026)    | -                | -         |     5.99 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3712 | 2024-03-11 | RUBY              | W   | 0.213      | 0.372        | 0.095 (0.008)    | -                | -         |     4.24 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3751 | 2024-03-09 | INGLORIOUS        | W   | 0.200      | -            | -                | -                | -         |     1.00 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3777 | 2024-03-08 | FAVBET            | W   | 0.194      | -            | -                | -                | -         |     2.42 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     3924 | 2024-03-03 | TSM               | L   | 0.160      | -            | -                | -                | -         |    -3.63 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     4170 | 2024-02-20 | ex-Guild Eagles   | L   | 0.080      | -            | -                | -                | -         |    -1.35 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     4192 | 2024-02-19 | Monte             | L   | 0.073      | -            | -                | -                | -         |    -0.70 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            1 |     4197 | 2024-02-19 | Astralis          | L   | 0.072      | -            | -                | -                | -         |    -0.02 | BTN, ERSIN, ragga, s0und, XELLOW     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,379.45)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-05-02 |      0.560 | $1,000.00      | $560.17         |
| 2024-03-25 |      0.307 | $4,300.00      | $1,319.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
