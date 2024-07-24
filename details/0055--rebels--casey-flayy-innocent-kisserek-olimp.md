### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [41]( ../standings_europe.md)<br />
Final Rank Value:  1044.1<br />
<br />
Final Rank Value (1044.1) = Starting Rank Value (1022.4) + Head To Head Adjustments (21.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1022.4
- 400 + ( ( 0.307 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1022.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |        2 | 2024-07-24 | SAW               | W   | 1.000      | 0.500        | 0.121 (0.060)    | 0.500 (0.250)    | 0 (0.000) |    21.95 | casey, Flayy, innocent, kisserek, olimp |
|           48 |       16 | 2024-07-24 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -19.92 | casey, Flayy, innocent, kisserek, olimp |
|           47 |       59 | 2024-07-23 | Enterprise        | W   | 1.000      | 0.371        | 0.050 (0.018)    | 0.646 (0.239)    | 0 (0.000) |    11.53 | casey, Flayy, innocent, kisserek, olimp |
|           46 |       76 | 2024-07-22 | Insilio           | W   | 1.000      | 0.371        | -                | 0.582 (0.216)    | 0 (0.000) |    13.79 | casey, Flayy, innocent, kisserek, olimp |
|           45 |      177 | 2024-07-19 | B8                | L   | 1.000      | -            | -                | -                | -         |    -9.91 | casey, Flayy, innocent, kisserek, olimp |
|           44 |      242 | 2024-07-18 | Illuminar         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.26 | casey, Flayy, innocent, kisserek, olimp |
|           43 |      304 | 2024-07-17 | 9INE              | W   | 1.000      | 0.500        | -                | 0.480 (0.240)    | 0 (0.000) |     9.77 | casey, Flayy, innocent, kisserek, olimp |
|           42 |      391 | 2024-07-15 | brazylijski luz   | L   | 1.000      | -            | -                | -                | -         |   -22.90 | casey, Flayy, innocent, kisserek, olimp |
|           41 |      401 | 2024-07-15 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -9.39 | casey, Flayy, innocent, kisserek, olimp |
|           40 |      440 | 2024-07-12 | Enterprise        | W   | 1.000      | 0.371        | 0.050 (0.018)    | 0.646 (0.239)    | 0 (0.000) |    12.48 | casey, Flayy, innocent, kisserek, olimp |
|           39 |      477 | 2024-07-10 | Belarus           | W   | 1.000      | -            | -                | -                | -         |     0.98 | casey, Flayy, innocent, kisserek, olimp |
|           38 |      489 | 2024-07-09 | 500               | W   | 1.000      | -            | -                | -                | -         |     0.96 | casey, Flayy, innocent, kisserek, olimp |
|           37 |      525 | 2024-07-08 | Verdant           | W   | 1.000      | -            | -                | -                | -         |     9.05 | casey, Flayy, innocent, kisserek, olimp |
|           36 |      715 | 2024-06-13 | Sampi             | L   | 0.927      | -            | -                | -                | -         |   -20.41 | casey, Flayy, innocent, kisserek, olimp |
|           35 |      740 | 2024-06-12 | PERA              | L   | 0.920      | -            | -                | -                | -         |   -16.74 | casey, Flayy, innocent, kisserek, olimp |
|           34 |      782 | 2024-06-10 | Permitta          | W   | 0.907      | 0.379        | -                | 0.790 (0.271)    | -         |    10.31 | casey, Flayy, innocent, kisserek, olimp |
|           33 |      821 | 2024-06-09 | Rhyno             | L   | 0.900      | -            | -                | -                | -         |   -15.55 | casey, Flayy, kisserek, olimp, SZPERO   |
|           32 |      946 | 2024-06-07 | BLEED             | W   | 0.887      | 0.500        | 0.162 (0.072)    | 0.439 (0.195)    | -         |    21.29 | casey, Flayy, innocent, kisserek, olimp |
|           31 |     1066 | 2024-06-05 | 9INE              | W   | 0.874      | 0.500        | -                | 0.480 (0.210)    | -         |     7.55 | casey, Flayy, innocent, kisserek, olimp |
|           30 |     1256 | 2024-05-30 | PERA              | W   | 0.834      | 0.379        | 0.061 (0.019)    | -                | -         |    11.13 | casey, Flayy, innocent, kisserek, olimp |
|           29 |     1296 | 2024-05-29 | UNiTY             | L   | 0.825      | -            | -                | -                | -         |   -15.62 | casey, Flayy, innocent, kisserek, olimp |
|           28 |     1383 | 2024-05-25 | kONO              | W   | 0.798      | -            | -                | -                | -         |     7.17 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     1497 | 2024-05-21 | UNiTY             | L   | 0.771      | -            | -                | -                | -         |   -13.71 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     1520 | 2024-05-20 | The Prodigies     | W   | 0.767      | -            | -                | -                | -         |     1.41 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     1589 | 2024-05-18 | B8                | L   | 0.751      | -            | -                | -                | -         |    -8.70 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     1619 | 2024-05-17 | Gaimin Gladiators | W   | 0.745      | 0.384        | 0.053 (0.015)    | -                | -         |    12.37 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     2111 | 2024-04-28 | Aurora            | L   | 0.617      | -            | -                | -                | -         |    -1.06 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     2160 | 2024-04-26 | MIBR              | W   | 0.604      | 0.500        | 0.257 (0.078)    | 0.561 (0.169)    | 1 (0.604) |    17.77 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     2162 | 2024-04-25 | Rooster           | W   | 0.603      | -            | -                | -                | 1 (0.603) |     4.73 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     2315 | 2024-04-19 | brazylijski luz   | L   | 0.560      | -            | -                | -                | -         |   -12.88 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     2494 | 2024-04-13 | Monte             | L   | 0.520      | -            | -                | -                | -         |    -7.65 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     2626 | 2024-04-09 | B8                | W   | 0.494      | 0.500        | 0.206 (0.051)    | 0.933 (0.230)    | -         |     8.82 | casey, Flayy, innocent, kisserek, olimp |
|           17 |     2769 | 2024-04-04 | ALTERNATE aTTaX   | W   | 0.460      | -            | -                | -                | -         |     6.57 | casey, Flayy, innocent, kisserek, olimp |
|           16 |     2819 | 2024-04-03 | SINNERS           | L   | 0.452      | -            | -                | -                | -         |    -6.44 | casey, Flayy, innocent, kisserek, olimp |
|           15 |     2902 | 2024-03-28 | ex-Sprout         | W   | 0.414      | -            | -                | -                | -         |     0.77 | casey, Flayy, innocent, kisserek, olimp |
|           14 |     2935 | 2024-03-27 | B8                | L   | 0.407      | -            | -                | -                | -         |    -5.01 | casey, Flayy, innocent, kisserek, olimp |
|           13 |     2945 | 2024-03-27 | Sashi             | W   | 0.407      | -            | -                | -                | -         |     8.44 | casey, Flayy, innocent, kisserek, olimp |
|           12 |     2975 | 2024-03-25 | Aurora            | L   | 0.394      | -            | -                | -                | -         |    -0.49 | casey, Flayy, innocent, kisserek, olimp |
|           11 |     3170 | 2024-03-14 | brazylijski luz   | L   | 0.321      | -            | -                | -                | -         |    -7.73 | casey, Flayy, kisserek, olimp, SZPERO   |
|           10 |     3442 | 2024-03-04 | BLEED             | L   | 0.254      | -            | -                | -                | -         |    -4.34 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     3476 | 2024-03-03 | Sangal            | W   | 0.246      | 0.500        | 0.195 (0.024)    | -                | -         |     4.66 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     3488 | 2024-03-02 | Aurora            | L   | 0.240      | -            | -                | -                | -         |    -0.30 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     3523 | 2024-02-29 | Sangal            | W   | 0.227      | 0.500        | 0.195 (0.022)    | -                | -         |     4.36 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     4014 | 2024-02-04 | Falcons           | L   | 0.061      | -            | -                | -                | -         |    -0.17 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     4051 | 2024-02-03 | FaZe              | L   | 0.053      | -            | -                | -                | -         |    -0.02 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     4073 | 2024-02-02 | M80               | W   | 0.047      | -            | -                | -                | 1 (0.047) |     1.22 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     4125 | 2024-01-31 | Eternal Fire      | L   | 0.034      | -            | -                | -                | -         |    -0.03 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     4130 | 2024-01-31 | Cloud9            | W   | 0.033      | -            | -                | -                | 1 (0.033) |     0.64 | casey, Flayy, kisserek, olimp, sNx      |
|            1 |     4170 | 2024-01-28 | 9 Pandas          | L   | 0.013      | -            | -                | -                | -         |    -0.20 | casey, Flayy, kisserek, olimp, sNx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,562.85)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-24 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-13 |      0.927 | $1,089.00      | $1,009.97       |
| 2024-06-09 |      0.900 | $2,000.00      | $1,800.76       |
| 2024-05-18 |      0.753 | $2,000.00      | $1,506.94       |
| 2024-04-28 |      0.618 | $10,000.00     | $6,178.09       |
| 2024-02-11 |      0.107 | $10,000.00     | $1,067.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
