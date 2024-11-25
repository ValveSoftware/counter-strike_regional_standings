### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN<br />
Global Rank: [53](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [41]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1134.8<br />
<br />
Final Rank Value (1134.8) = Starting Rank Value (962.6) + Head To Head Adjustments (172.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.320[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 962.6
- 400 + ( ( 0.281 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 962.6


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
|           36 |      306 | 2024-11-12 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |   -11.66 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           35 |      317 | 2024-11-12 | GUN5            | W   | 1.000      | 0.384        | -                | 1.000 (0.384)    | 0 (0.000) |    16.35 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           34 |      349 | 2024-11-11 | ENCE            | W   | 1.000      | 0.384        | 0.295 (0.113)    | -                | 0 (0.000) |    23.47 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           33 |      370 | 2024-11-10 | 9 Pandas        | W   | 1.000      | 0.384        | 0.092 (0.035)    | 0.892 (0.343)    | 0 (0.000) |    21.87 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           32 |      405 | 2024-11-08 | Nemiga          | L   | 1.000      | -            | -                | -                | -         |    -4.93 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           31 |      411 | 2024-11-08 | Sashi           | W   | 1.000      | 0.384        | 0.053 (0.020)    | 0.675 (0.260)    | 0 (0.000) |    16.35 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           30 |      423 | 2024-11-07 | Monte           | W   | 1.000      | 0.426        | 0.048 (0.020)    | 0.756 (0.322)    | 0 (0.000) |    20.47 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           29 |      427 | 2024-11-07 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -13.18 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           28 |      442 | 2024-11-06 | Passion UA      | W   | 1.000      | 0.426        | 0.103 (0.044)    | 1.000 (0.426)    | 0 (0.000) |    16.98 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           27 |      476 | 2024-11-04 | Zero Tenacity   | W   | 1.000      | 0.384        | 0.076 (0.029)    | 0.743 (0.286)    | 0 (0.000) |    18.29 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           26 |      514 | 2024-11-02 | Into the Breach | L   | 1.000      | -            | -                | -                | -         |   -14.37 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           25 |      555 | 2024-10-31 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -12.97 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           24 |      603 | 2024-10-29 | AMKAL           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.05 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           23 |      615 | 2024-10-28 | Zero Tenacity   | W   | 1.000      | 0.426        | 0.076 (0.032)    | 0.743 (0.317)    | 0 (0.000) |    19.44 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           22 |      618 | 2024-10-28 | OG              | W   | 1.000      | 0.426        | 0.147 (0.063)    | -                | 0 (0.000) |    18.47 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           21 |      755 | 2024-10-20 | ECSTATIC        | W   | 0.960      | 0.354        | -                | 0.813 (0.276)    | -         |    16.43 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           20 |      897 | 2024-10-14 | UNiTY           | W   | 0.920      | -            | -                | -                | -         |    15.92 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           19 |      919 | 2024-10-12 | CYBERSHOKE      | W   | 0.908      | -            | -                | -                | -         |    14.55 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           18 |      990 | 2024-10-09 | HOTU            | W   | 0.886      | -            | -                | -                | -         |     9.51 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           17 |     1097 | 2024-10-05 | Permitta        | W   | 0.861      | 0.354        | -                | 1.000 (0.305)    | -         |    15.94 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           16 |     1134 | 2024-10-04 | ENCE Academy    | L   | 0.855      | -            | -                | -                | -         |   -19.84 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           15 |     1184 | 2024-10-03 | ECLOT           | W   | 0.847      | 0.333        | 0.187 (0.053)    | 1.000 (0.282)    | -         |    22.42 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           14 |     1216 | 2024-10-02 | CYBERSHOKE      | W   | 0.841      | -            | -                | -                | -         |    15.24 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           13 |     1292 | 2024-09-30 | ALTERNATE aTTaX | W   | 0.827      | 0.333        | 0.070 (0.019)    | -                | -         |    18.46 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           12 |     1321 | 2024-09-29 | Insilio         | L   | 0.820      | -            | -                | -                | -         |    -9.37 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           11 |     1441 | 2024-09-26 | ARCRED          | L   | 0.801      | -            | -                | -                | -         |   -15.62 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           10 |     1926 | 2024-09-11 | Daystar         | L   | 0.702      | -            | -                | -                | -         |   -16.26 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            9 |     2028 | 2024-09-07 | NAVI Junior     | L   | 0.675      | -            | -                | -                | -         |    -8.82 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            8 |     2062 | 2024-09-06 | K27             | W   | 0.668      | -            | -                | -                | -         |     2.80 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            7 |     2726 | 2024-08-19 | Cloud9          | L   | 0.549      | -            | -                | -                | -         |    -5.70 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            6 |     2730 | 2024-08-19 | kONO            | W   | 0.548      | -            | -                | -                | -         |     8.65 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            5 |     2738 | 2024-08-19 | Spirit Academy  | W   | 0.548      | -            | -                | -                | -         |     9.33 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            4 |     2790 | 2024-08-17 | GenOne          | L   | 0.534      | -            | -                | -                | -         |   -12.85 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            3 |     3933 | 2024-07-16 | TSM             | L   | 0.320      | -            | -                | -                | -         |    -4.60 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            2 |     4072 | 2024-07-09 | Rebels          | L   | 0.275      | -            | -                | -                | -         |    -4.88 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            1 |     4082 | 2024-07-09 | kONO            | L   | 0.274      | -            | -                | -                | -         |    -4.76 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,574.88)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-11-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-10-05 |      0.860 | $1,250.00      | $1,074.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
