### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Global Rank: [60](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [42]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  980.9<br />
<br />
Final Rank Value (980.9) = Starting Rank Value (942.5) + Head To Head Adjustments (38.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 942.5
- 400 + ( ( 0.281 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 942.5


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
|           58 |      273 | 2024-10-01 | Apogee            | L   | 1.000      | -            | -                | -                | -         |   -16.90 | casey, Flayy, innocent, kisserek, olimp |
|           57 |      556 | 2024-09-24 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -11.92 | casey, Flayy, innocent, kisserek, olimp |
|           56 |      561 | 2024-09-24 | ex-Enterprise     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.97 | casey, Flayy, innocent, kisserek, olimp |
|           55 |      594 | 2024-09-23 | Souls Heart       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.04 | casey, Flayy, innocent, kisserek, olimp |
|           54 |      673 | 2024-09-20 | Insilio           | W   | 1.000      | 0.500        | 0.040 (0.020)    | 0.678 (0.339)    | 0 (0.000) |    15.32 | casey, Flayy, innocent, kisserek, olimp |
|           53 |      844 | 2024-09-14 | Sashi             | W   | 1.000      | 0.384        | 0.111 (0.043)    | 0.640 (0.246)    | 0 (0.000) |    18.61 | casey, Flayy, innocent, kisserek, olimp |
|           52 |      868 | 2024-09-14 | Zero Tenacity     | W   | 1.000      | 0.384        | 0.127 (0.049)    | 0.904 (0.348)    | 0 (0.000) |    22.06 | casey, Flayy, innocent, kisserek, olimp |
|           51 |      897 | 2024-09-13 | Johnny Speeds     | W   | 1.000      | 0.384        | 0.121 (0.047)    | 1.000 (0.384)    | 0 (0.000) |    19.67 | casey, Flayy, innocent, kisserek, olimp |
|           50 |      909 | 2024-09-12 | Betera            | L   | 1.000      | -            | -                | -                | -         |   -25.95 | casey, Flayy, innocent, kisserek, olimp |
|           49 |      923 | 2024-09-12 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -21.42 | casey, Flayy, innocent, kisserek, olimp |
|           48 |      963 | 2024-09-11 | Into the Breach   | W   | 1.000      | 0.384        | -                | 0.648 (0.249)    | 0 (0.000) |    14.59 | casey, Flayy, kisserek, olimp, SZPERO   |
|           47 |     1082 | 2024-09-06 | GUN5              | L   | 0.980      | -            | -                | -                | -         |   -12.93 | casey, Flayy, kisserek, olimp, SZPERO   |
|           46 |     1117 | 2024-09-05 | Qiang             | W   | 0.974      | -            | -                | -                | 0 (0.000) |     5.14 | casey, Flayy, kisserek, olimp, SZPERO   |
|           45 |     1240 | 2024-09-01 | Partizan          | L   | 0.946      | -            | -                | -                | -         |   -19.98 | casey, Flayy, innocent, kisserek, olimp |
|           44 |     1415 | 2024-08-27 | FAVBET            | W   | 0.913      | 0.384        | -                | 0.768 (0.269)    | -         |    11.84 | casey, Flayy, innocent, kisserek, olimp |
|           43 |     1585 | 2024-08-23 | Permitta          | W   | 0.887      | -            | -                | -                | -         |    11.85 | casey, Flayy, innocent, kisserek, olimp |
|           42 |     1598 | 2024-08-23 | Johnny Speeds     | W   | 0.885      | 0.143        | 0.121 (0.015)    | -                | -         |    17.50 | casey, Flayy, innocent, kisserek, olimp |
|           41 |     1630 | 2024-08-22 | OG                | L   | 0.878      | -            | -                | -                | -         |   -13.61 | casey, Flayy, innocent, kisserek, olimp |
|           40 |     1660 | 2024-08-21 | 9 Pandas          | L   | 0.873      | -            | -                | -                | -         |    -9.39 | casey, Flayy, innocent, kisserek, olimp |
|           39 |     1695 | 2024-08-21 | Zero Tenacity     | W   | 0.872      | 0.143        | 0.127 (0.016)    | -                | -         |    15.94 | casey, Flayy, innocent, kisserek, olimp |
|           38 |     1728 | 2024-08-20 | Rhyno             | W   | 0.866      | 0.384        | 0.046 (0.015)    | 0.494 (0.164)    | -         |    14.01 | casey, Flayy, innocent, kisserek, olimp |
|           37 |     1858 | 2024-08-15 | fnatic            | L   | 0.833      | -            | -                | -                | -         |    -4.01 | casey, Flayy, innocent, kisserek, olimp |
|           36 |     1926 | 2024-08-13 | DASH              | W   | 0.819      | -            | -                | -                | -         |     3.59 | casey, Flayy, innocent, kisserek, olimp |
|           35 |     2104 | 2024-08-07 | Sangal            | L   | 0.780      | -            | -                | -                | -         |    -2.81 | casey, Flayy, innocent, kisserek, olimp |
|           34 |     2126 | 2024-08-07 | TALON             | L   | 0.778      | -            | -                | -                | -         |   -21.75 | casey, Flayy, innocent, kisserek, olimp |
|           33 |     2174 | 2024-08-05 | SINNERS           | L   | 0.767      | -            | -                | -                | -         |    -8.58 | casey, Flayy, innocent, kisserek, olimp |
|           32 |     2406 | 2024-07-30 | RUSH B            | L   | 0.728      | -            | -                | -                | -         |   -15.15 | casey, Flayy, innocent, kisserek, olimp |
|           31 |     2601 | 2024-07-24 | SAW               | W   | 0.687      | 0.500        | 0.299 (0.103)    | 0.714 (0.245)    | -         |    19.85 | casey, Flayy, innocent, kisserek, olimp |
|           30 |     2615 | 2024-07-24 | 9INE              | L   | 0.685      | -            | -                | -                | -         |   -10.82 | casey, Flayy, innocent, kisserek, olimp |
|           29 |     2658 | 2024-07-23 | ex-Enterprise     | W   | 0.678      | -            | -                | -                | -         |     8.10 | casey, Flayy, innocent, kisserek, olimp |
|           28 |     2675 | 2024-07-22 | Insilio           | W   | 0.672      | 0.371        | -                | 0.678 (0.169)    | -         |    10.13 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     2776 | 2024-07-19 | B8                | L   | 0.652      | -            | -                | -                | -         |    -6.89 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     2841 | 2024-07-18 | Illuminar         | W   | 0.645      | -            | -                | -                | -         |     7.76 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     2903 | 2024-07-17 | 9INE              | W   | 0.639      | 0.500        | 0.097 (0.031)    | 0.671 (0.214)    | -         |    10.18 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     2990 | 2024-07-15 | Apogee            | L   | 0.627      | -            | -                | -                | -         |   -13.13 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     3000 | 2024-07-15 | Sangal            | L   | 0.625      | -            | -                | -                | -         |    -3.05 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     3039 | 2024-07-12 | ex-Enterprise     | W   | 0.606      | -            | -                | -                | -         |     7.41 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     3076 | 2024-07-10 | Belarus           | W   | 0.593      | -            | -                | -                | -         |     0.82 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     3088 | 2024-07-09 | 500               | W   | 0.588      | -            | -                | -                | -         |     4.48 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     3124 | 2024-07-08 | Verdant           | W   | 0.578      | -            | -                | -                | -         |     6.63 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     3314 | 2024-06-13 | Sampi             | L   | 0.414      | -            | -                | -                | -         |    -6.39 | casey, Flayy, innocent, kisserek, olimp |
|           17 |     3339 | 2024-06-12 | Qiang             | L   | 0.408      | -            | -                | -                | -         |    -8.79 | casey, Flayy, innocent, kisserek, olimp |
|           16 |     3381 | 2024-06-10 | Permitta          | W   | 0.394      | -            | -                | -                | -         |     5.79 | casey, Flayy, innocent, kisserek, olimp |
|           15 |     3420 | 2024-06-09 | Rhyno             | L   | 0.388      | -            | -                | -                | -         |    -6.25 | casey, Flayy, kisserek, olimp, SZPERO   |
|           14 |     3545 | 2024-06-07 | BLEED             | W   | 0.374      | -            | -                | -                | -         |     8.62 | casey, Flayy, innocent, kisserek, olimp |
|           13 |     3665 | 2024-06-05 | 9INE              | W   | 0.361      | 0.500        | 0.097 (0.018)    | -                | -         |     6.33 | casey, Flayy, innocent, kisserek, olimp |
|           12 |     3855 | 2024-05-30 | Qiang             | W   | 0.321      | -            | -                | -                | -         |     3.22 | casey, Flayy, innocent, kisserek, olimp |
|           11 |     3895 | 2024-05-29 | UNiTY             | L   | 0.312      | -            | -                | -                | -         |    -3.57 | casey, Flayy, innocent, kisserek, olimp |
|           10 |     3982 | 2024-05-25 | kONO              | W   | 0.285      | -            | -                | -                | -         |     2.95 | casey, Flayy, innocent, kisserek, olimp |
|            9 |     4096 | 2024-05-21 | UNiTY             | L   | 0.258      | -            | -                | -                | -         |    -2.79 | casey, Flayy, innocent, kisserek, olimp |
|            8 |     4119 | 2024-05-20 | The Prodigies     | W   | 0.254      | -            | -                | -                | -         |     1.40 | casey, Flayy, innocent, kisserek, olimp |
|            7 |     4188 | 2024-05-18 | B8                | L   | 0.239      | -            | -                | -                | -         |    -2.46 | casey, Flayy, innocent, kisserek, olimp |
|            6 |     4218 | 2024-05-17 | Gaimin Gladiators | W   | 0.233      | -            | -                | -                | -         |     3.40 | casey, Flayy, innocent, kisserek, olimp |
|            5 |     4710 | 2024-04-28 | Aurora            | L   | 0.104      | -            | -                | -                | -         |    -0.58 | casey, Flayy, innocent, kisserek, olimp |
|            4 |     4759 | 2024-04-26 | MIBR              | W   | 0.091      | -            | -                | -                | 1 (0.091) |     2.68 | casey, Flayy, innocent, kisserek, olimp |
|            3 |     4761 | 2024-04-25 | Rooster           | W   | 0.090      | -            | -                | -                | 1 (0.090) |     0.73 | casey, Flayy, innocent, kisserek, olimp |
|            2 |     4914 | 2024-04-19 | Apogee            | L   | 0.048      | -            | -                | -                | -         |    -0.96 | casey, Flayy, innocent, kisserek, olimp |
|            1 |     5093 | 2024-04-13 | Monte             | L   | 0.007      | -            | -                | -                | -         |    -0.15 | casey, Flayy, innocent, kisserek, olimp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,835.21)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-07-25 |      0.692 | $3,000.00      | $2,074.97       |
| 2024-06-13 |      0.415 | $1,089.00      | $451.68         |
| 2024-06-09 |      0.388 | $2,000.00      | $775.44         |
| 2024-05-18 |      0.241 | $2,000.00      | $481.62         |
| 2024-04-28 |      0.105 | $10,000.00     | $1,051.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
