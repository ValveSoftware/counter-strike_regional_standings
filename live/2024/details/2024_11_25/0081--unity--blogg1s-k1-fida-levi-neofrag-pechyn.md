### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn<br />
Global Rank: [81](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [60]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  975.1<br />
<br />
Final Rank Value (975.1) = Starting Rank Value (1054.5) + Head To Head Adjustments (-79.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.446[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.368[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1054.5
- 400 + ( ( 0.327 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1054.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       11 | 2024-11-24 | ECLOT           | L   | 1.000      | -            | -                | -                | -         |    -6.78 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           46 |       45 | 2024-11-23 | Sampi           | W   | 1.000      | 0.458        | 0.038 (0.017)    | 0.515 (0.236)    | 1 (1.000) |    16.56 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           45 |      139 | 2024-11-18 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |    -6.58 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           44 |      156 | 2024-11-17 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -1.29 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           43 |      166 | 2024-11-17 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |    -5.74 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           42 |      699 | 2024-10-24 | HOTU            | L   | 0.988      | -            | -                | -                | -         |   -20.65 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           41 |      731 | 2024-10-21 | Johnny Speeds   | L   | 0.967      | -            | -                | -                | -         |   -11.11 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           40 |      897 | 2024-10-14 | 500             | L   | 0.920      | -            | -                | -                | -         |   -15.92 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           39 |     1054 | 2024-10-07 | NAVI Junior     | L   | 0.873      | -            | -                | -                | -         |   -13.39 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           38 |     1056 | 2024-10-07 | 9INE            | W   | 0.873      | 0.143        | 0.056 (0.007)    | 0.750 (0.093)    | 0 (0.000) |    14.04 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           37 |     1081 | 2024-10-06 | L&G             | L   | 0.866      | -            | -                | -                | -         |   -20.08 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           36 |     1149 | 2024-10-04 | Preasy          | W   | 0.853      | -            | -                | -                | 0 (0.000) |     3.62 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           35 |     1205 | 2024-10-02 | FAVBET          | W   | 0.842      | 0.143        | -                | 0.720 (0.087)    | 0 (0.000) |     9.87 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           34 |     1222 | 2024-10-02 | Viperio         | W   | 0.840      | -            | -                | -                | 0 (0.000) |     0.75 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           33 |     1267 | 2024-10-01 | Serbia          | L   | 0.833      | -            | -                | -                | -         |    -5.69 | Blogg1s, K1-FiDa, Levi, NEOFRAG, Pechyn |
|           32 |     1399 | 2024-09-27 | Into the Breach | L   | 0.807      | -            | -                | -                | -         |   -13.68 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           31 |     1555 | 2024-09-24 | Anonymo         | W   | 0.786      | 0.371        | 0.043 (0.012)    | -                | -         |     4.57 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           30 |     1607 | 2024-09-22 | SINNERS         | W   | 0.775      | 0.346        | 0.090 (0.024)    | 0.885 (0.237)    | 1 (0.775) |    16.85 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           29 |     1628 | 2024-09-21 | SINNERS         | W   | 0.768      | 0.346        | 0.090 (0.024)    | 0.885 (0.236)    | 1 (0.768) |    17.48 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           28 |     1660 | 2024-09-20 | Sampi           | W   | 0.760      | 0.346        | 0.038 (0.010)    | 0.515 (0.136)    | 1 (0.760) |    12.52 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           27 |     1667 | 2024-09-20 | ALTERNATE aTTaX | L   | 0.759      | -            | -                | -                | -         |    -8.66 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           26 |     1879 | 2024-09-13 | Apogee          | L   | 0.713      | -            | -                | -                | -         |   -16.89 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           25 |     1918 | 2024-09-12 | ex-Enterprise   | L   | 0.706      | -            | -                | -                | -         |   -14.29 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           24 |     2037 | 2024-09-07 | PeeP            | L   | 0.674      | -            | -                | -                | -         |   -20.13 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           23 |     2097 | 2024-09-05 | CPH Wolves      | L   | 0.661      | -            | -                | -                | -         |   -16.26 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           22 |     2574 | 2024-08-23 | KOI             | W   | 0.574      | -            | -                | -                | -         |     4.47 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           21 |     2618 | 2024-08-22 | Rhyno           | W   | 0.566      | 0.143        | 0.139 (0.011)    | -                | -         |    13.48 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           20 |     2638 | 2024-08-21 | ENCE            | W   | 0.561      | 0.143        | 0.295 (0.024)    | -                | -         |    14.45 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           19 |     2675 | 2024-08-21 | Monte           | L   | 0.560      | -            | -                | -                | -         |    -8.39 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           18 |     2909 | 2024-08-13 | Revenant        | L   | 0.506      | -            | -                | -                | -         |   -11.92 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           17 |     2978 | 2024-08-11 | Revenant        | W   | 0.493      | 0.333        | -                | 0.351 (0.058)    | -         |     3.75 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           16 |     3032 | 2024-08-09 | kONO            | W   | 0.479      | 0.333        | -                | 0.433 (0.069)    | -         |     5.29 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           15 |     3143 | 2024-08-06 | NAVI Junior     | W   | 0.460      | 0.333        | 0.139 (0.021)    | 0.940 (0.144)    | -         |     6.55 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           14 |     3724 | 2024-07-20 | Insilio         | L   | 0.346      | -            | -                | -                | -         |    -7.51 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           13 |     3753 | 2024-07-19 | ex-Enterprise   | L   | 0.341      | -            | -                | -                | -         |    -6.66 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           12 |     3985 | 2024-07-15 | kONO            | W   | 0.312      | -            | -                | -                | -         |     3.42 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           11 |     4044 | 2024-07-11 | ALTERNATE aTTaX | W   | 0.286      | 0.371        | 0.070 (0.007)    | 0.729 (0.077)    | -         |     6.59 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn   |
|           10 |     4171 | 2024-06-18 | kONO            | L   | 0.132      | -            | -                | -                | -         |    -2.81 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            9 |     4175 | 2024-06-17 | K10             | W   | 0.127      | -            | -                | -                | -         |     0.28 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            8 |     4203 | 2024-06-16 | Verdant         | W   | 0.119      | -            | -                | -                | -         |     0.29 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            7 |     4746 | 2024-06-03 | ex-Enterprise   | L   | 0.033      | -            | -                | -                | -         |    -0.62 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            6 |     4757 | 2024-06-02 | ECLOT           | L   | 0.028      | -            | -                | -                | -         |    -0.07 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            5 |     4763 | 2024-06-02 | SINNERS         | W   | 0.027      | -            | -                | -                | 1 (0.027) |     0.62 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            4 |     4770 | 2024-06-02 | Passion UA      | L   | 0.026      | -            | -                | -                | -         |    -0.28 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            3 |     4788 | 2024-06-01 | ECLOT           | L   | 0.021      | -            | -                | -                | -         |    -0.06 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            2 |     4825 | 2024-05-31 | SINNERS         | W   | 0.014      | -            | -                | -                | 1 (0.014) |     0.33 | K1-FiDa, Levi, M1key, NIO, Pechyn       |
|            1 |     4834 | 2024-05-31 | Johnny Speeds   | W   | 0.012      | -            | -                | -                | -         |     0.25 | K1-FiDa, Levi, M1key, NIO, Pechyn       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,776.22)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      1.000 | $13,757.00     | $13,757.00      |
| 2024-10-08 |      0.879 | $1,000.00      | $879.05         |
| 2024-09-22 |      0.775 | $7,928.00      | $6,140.62       |
| 2024-08-13 |      0.506 | $3,000.00      | $1,518.21       |
| 2024-06-18 |      0.132 | $3,000.00      | $396.88         |
| 2024-06-02 |      0.028 | $3,048.00      | $84.47          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
