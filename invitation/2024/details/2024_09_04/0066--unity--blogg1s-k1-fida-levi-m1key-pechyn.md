### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Global Rank: [66](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [48]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  967.4<br />
<br />
Final Rank Value (967.4) = Starting Rank Value (914.7) + Head To Head Adjustments (52.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.125[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 914.7
- 400 + ( ( 0.260 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 914.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      437 | 2024-08-23 | KOI             | W   | 1.000      | 0.143        | 0.041 (0.006)    | -                | 0 (0.000) |    15.82 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           39 |      481 | 2024-08-22 | Rhyno           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.96 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           38 |      501 | 2024-08-21 | ENCE            | W   | 1.000      | 0.143        | 0.132 (0.019)    | -                | 0 (0.000) |    24.41 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           37 |      538 | 2024-08-21 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -12.11 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           36 |      772 | 2024-08-13 | Revenant        | L   | 1.000      | -            | -                | -                | -         |   -15.66 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           35 |      841 | 2024-08-11 | Revenant        | W   | 1.000      | 0.333        | 0.042 (0.014)    | 0.635 (0.212)    | 0 (0.000) |    15.22 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           34 |      895 | 2024-08-09 | kONO            | W   | 1.000      | 0.333        | 0.025 (0.008)    | 0.550 (0.183)    | 0 (0.000) |    12.48 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           33 |     1006 | 2024-08-06 | NAVI Junior     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.08 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           32 |     1587 | 2024-07-20 | Insilio         | L   | 0.892      | -            | -                | -                | -         |   -13.44 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           31 |     1616 | 2024-07-19 | Enterprise      | L   | 0.886      | -            | -                | -                | -         |   -15.16 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           30 |     1848 | 2024-07-15 | kONO            | W   | 0.858      | 0.371        | 0.025 (0.008)    | 0.550 (0.175)    | 0 (0.000) |    10.96 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           29 |     1907 | 2024-07-11 | ALTERNATE aTTaX | W   | 0.832      | 0.371        | 0.099 (0.031)    | 0.820 (0.253)    | -         |    14.23 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |     2034 | 2024-06-18 | kONO            | L   | 0.678      | -            | -                | -                | -         |   -12.65 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |     2038 | 2024-06-17 | K10             | W   | 0.673      | -            | -                | -                | -         |     4.16 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |     2066 | 2024-06-16 | Verdant         | W   | 0.665      | 0.333        | -                | 0.364 (0.081)    | -         |     8.59 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |     2609 | 2024-06-03 | Enterprise      | L   | 0.578      | -            | -                | -                | -         |    -9.80 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |     2620 | 2024-06-02 | ECLOT           | L   | 0.573      | -            | -                | -                | -         |    -4.08 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |     2626 | 2024-06-02 | SINNERS         | W   | 0.573      | 0.346        | 0.084 (0.017)    | 1.000 (0.198)    | 1 (0.573) |    13.10 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |     2633 | 2024-06-02 | Passion UA      | L   | 0.571      | -            | -                | -                | -         |    -6.07 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |     2651 | 2024-06-01 | ECLOT           | L   | 0.567      | -            | -                | -                | -         |    -4.05 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |     2688 | 2024-05-31 | SINNERS         | W   | 0.560      | 0.346        | 0.084 (0.016)    | 1.000 (0.194)    | 1 (0.560) |    13.27 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |     2697 | 2024-05-31 | Johnny Speeds   | W   | 0.558      | 0.371        | 0.103 (0.021)    | 0.990 (0.205)    | -         |    14.17 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |     2742 | 2024-05-29 | Rebels          | W   | 0.546      | 0.371        | 0.029 (0.006)    | 0.639 (0.129)    | -         |     9.88 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |     2754 | 2024-05-28 | GL Academy      | L   | 0.541      | -            | -                | -                | -         |   -12.94 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |     2824 | 2024-05-25 | Partizan        | L   | 0.519      | -            | -                | -                | -         |   -11.59 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |     2850 | 2024-05-23 | SINNERS         | L   | 0.507      | -            | -                | -                | -         |    -4.12 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     2943 | 2024-05-21 | Rebels          | W   | 0.491      | 0.371        | -                | 0.639 (0.116)    | -         |     8.54 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     3229 | 2024-05-13 | Johnny Speeds   | L   | 0.440      | -            | -                | -                | -         |    -2.68 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     3831 | 2024-04-18 | Johnny Speeds   | L   | 0.272      | -            | -                | -                | -         |    -1.69 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     3868 | 2024-04-17 | Viperio         | W   | 0.265      | -            | -                | -                | -         |     1.26 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     3904 | 2024-04-16 | Lilmix          | W   | 0.258      | -            | -                | -                | -         |     0.43 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     3933 | 2024-04-14 | Sashi           | L   | 0.245      | -            | -                | -                | -         |    -2.08 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     4039 | 2024-04-10 | SINNERS         | L   | 0.218      | -            | -                | -                | -         |    -1.33 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     4167 | 2024-04-06 | Sashi           | L   | 0.192      | -            | -                | -                | -         |    -1.65 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     4178 | 2024-04-05 | ECLOT           | W   | 0.185      | -            | -                | -                | -         |     4.78 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     4224 | 2024-04-04 | Sashi           | L   | 0.179      | -            | -                | -                | -         |    -1.53 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     4303 | 2024-04-02 | Illuminar       | W   | 0.166      | -            | -                | -                | -         |     0.48 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     4555 | 2024-03-17 | SINNERS         | L   | 0.060      | -            | -                | -                | -         |    -0.38 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     4570 | 2024-03-16 | ECLOT           | L   | 0.054      | -            | -                | -                | -         |    -0.31 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     4586 | 2024-03-15 | SINNERS         | W   | 0.048      | -            | -                | -                | 1 (0.048) |     1.21 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,251.43)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-18 |      0.678 | $3,000.00      | $2,034.13       |
| 2024-06-02 |      0.573 | $3,048.00      | $1,747.91       |
| 2024-04-18 |      0.272 | $3,000.00      | $816.68         |
| 2024-04-06 |      0.192 | $3,000.00      | $574.77         |
| 2024-03-17 |      0.061 | $1,279.00      | $77.94          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
