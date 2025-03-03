### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [133](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  719.4<br />
<br />
Final Rank Value (719.4) = Starting Rank Value (742.6) + Head To Head Adjustments (-23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.115[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.6
- 400 + ( ( 0.178 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 742.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      954 | 2024-12-12 | ENCE          | L   | 0.659      | -            | -                | -                | -         |    -3.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |      963 | 2024-12-11 | Fire Flux     | L   | 0.654      | -            | -                | -                | -         |    -7.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |      967 | 2024-12-11 | Iberian Soul  | W   | 0.654      | 0.435        | 0.015 (0.004)    | 0.636 (0.181)    | 0 (0.000) |    13.63 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |      976 | 2024-12-10 | JiJieHao      | L   | 0.648      | -            | -                | -                | -         |   -12.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |      987 | 2024-12-09 | CYBERSHOKE    | W   | 0.640      | 0.435        | 0.010 (0.003)    | 1.000 (0.278)    | 0 (0.000) |    12.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     1007 | 2024-12-08 | Insilio       | L   | 0.633      | -            | -                | -                | -         |   -12.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     1061 | 2024-12-06 | WildLotus     | L   | 0.620      | -            | -                | -                | -         |    -8.18 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     1067 | 2024-12-06 | Illuminar     | L   | 0.618      | -            | -                | -                | -         |    -9.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     1116 | 2024-12-04 | Fire Flux     | W   | 0.607      | 0.435        | 0.008 (0.002)    | 0.973 (0.257)    | 0 (0.000) |    11.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     1160 | 2024-12-02 | TSM           | L   | 0.592      | -            | -                | -                | -         |    -9.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     1299 | 2024-11-24 | Fire Flux     | W   | 0.541      | 0.333        | 0.008 (0.001)    | 0.973 (0.175)    | 0 (0.000) |    10.89 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     1326 | 2024-11-23 | PCIFIC        | W   | 0.534      | 0.333        | 0.002 (0.000)    | -                | 0 (0.000) |     4.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     1718 | 2024-11-07 | Sashi         | L   | 0.427      | -            | -                | -                | -         |    -3.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     1791 | 2024-11-03 | Chimera       | W   | 0.400      | 0.384        | 0.018 (0.003)    | 0.555 (0.085)    | 0 (0.000) |     7.94 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     1821 | 2024-11-02 | 9 Pandas      | L   | 0.393      | -            | -                | -                | -         |    -2.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     1826 | 2024-11-02 | Rebels        | L   | 0.392      | -            | -                | -                | -         |    -6.76 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     1844 | 2024-11-01 | SINNERS       | L   | 0.386      | -            | -                | -                | -         |    -3.80 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     1897 | 2024-10-29 | Johnny Speeds | L   | 0.368      | -            | -                | -                | -         |    -3.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     1902 | 2024-10-29 | Rare Atom     | W   | 0.367      | 0.333        | 0.025 (0.003)    | 0.456 (0.056)    | 0 (0.000) |     7.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     1905 | 2024-10-29 | Tricked       | L   | 0.367      | -            | -                | -                | -         |    -4.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     1938 | 2024-10-27 | Rebels        | W   | 0.353      | 0.371        | 0.008 (0.001)    | 0.309 (0.040)    | 0 (0.000) |     5.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     2004 | 2024-10-24 | NewBALLS      | W   | 0.332      | 0.384        | -                | 0.040 (0.005)    | 0 (0.000) |     2.37 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     2050 | 2024-10-20 | AMKAL         | L   | 0.307      | -            | -                | -                | -         |    -6.17 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     2243 | 2024-10-11 | ARCRED        | W   | 0.246      | 0.384        | 0.015 (0.001)    | 0.285 (0.027)    | 0 (0.000) |     3.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     2743 | 2024-09-27 | WW            | L   | 0.152      | -            | -                | -                | -         |    -3.78 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     2826 | 2024-09-25 | Aurora        | L   | 0.141      | -            | -                | -                | -         |    -1.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     2841 | 2024-09-25 | CPH Wolves    | L   | 0.139      | -            | -                | -                | -         |    -2.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     2883 | 2024-09-24 | WildLotus     | L   | 0.134      | -            | -                | -                | -         |    -2.06 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     2995 | 2024-09-20 | CYBERSHOKE    | W   | 0.107      | 0.435        | 0.010 (0.000)    | 1.000 (0.047)    | -         |     2.10 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     3067 | 2024-09-18 | Insilio       | W   | 0.094      | -            | -                | -                | -         |     1.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     3131 | 2024-09-16 | FAVBET        | L   | 0.079      | -            | -                | -                | -         |    -1.04 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     3164 | 2024-09-15 | Nexus         | W   | 0.072      | -            | -                | -                | -         |     0.29 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     3339 | 2024-09-09 | NAVI Junior   | L   | 0.034      | -            | -                | -                | -         |    -0.26 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     3391 | 2024-09-07 | CPH Wolves    | W   | 0.020      | -            | -                | -                | -         |     0.23 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     3419 | 2024-09-06 | GamerLegion   | L   | 0.013      | -            | -                | -                | -         |    -0.27 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     3448 | 2024-09-05 | GL Academy    | W   | 0.007      | -            | -                | -                | -         |     0.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,844.48)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.541 | $5,000.00      | $2,703.09       |
| 2024-09-21 |      0.113 | $1,250.00      | $141.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
