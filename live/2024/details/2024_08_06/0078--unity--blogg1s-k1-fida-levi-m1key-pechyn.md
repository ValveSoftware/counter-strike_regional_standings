### Roster Details<br />
Team Name: UNiTY<br />
Roster: Blogg1s, K1-FiDa, Levi, M1key, Pechyn<br />
Global Rank: [78](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [55]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  956.6<br />
<br />
Final Rank Value (956.6) = Starting Rank Value (960.9) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 960.9
- 400 + ( ( 0.273 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 960.9


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
|           33 |       10 | 2024-08-06 | NAVI Junior     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.07 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           32 |      591 | 2024-07-20 | Insilio         | L   | 1.000      | -            | -                | -                | -         |   -15.20 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           31 |      620 | 2024-07-19 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -17.68 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           30 |      852 | 2024-07-15 | kONO            | W   | 1.000      | 0.371        | 0.028 (0.010)    | 0.553 (0.205)    | 0 (0.000) |    11.12 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           29 |      911 | 2024-07-11 | ALTERNATE aTTaX | W   | 1.000      | 0.371        | 0.031 (0.012)    | 0.537 (0.199)    | 0 (0.000) |    12.54 | Blogg1s, K1-FiDa, Levi, M1key, Pechyn |
|           28 |     1038 | 2024-06-18 | kONO            | L   | 0.871      | -            | -                | -                | -         |   -17.81 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           27 |     1042 | 2024-06-17 | K10             | W   | 0.866      | -            | -                | -                | 0 (0.000) |     4.90 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           26 |     1070 | 2024-06-16 | Verdant         | W   | 0.858      | 0.333        | 0.015 (0.004)    | 0.287 (0.082)    | 0 (0.000) |    10.05 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           25 |     1613 | 2024-06-03 | Enterprise      | L   | 0.771      | -            | -                | -                | -         |   -13.88 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           24 |     1624 | 2024-06-02 | ECLOT           | L   | 0.766      | -            | -                | -                | -         |    -5.00 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           23 |     1630 | 2024-06-02 | SINNERS         | W   | 0.766      | 0.346        | 0.047 (0.012)    | 0.800 (0.212)    | 1 (0.766) |    15.40 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           22 |     1637 | 2024-06-02 | Passion UA      | L   | 0.764      | -            | -                | -                | -         |    -8.92 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           21 |     1655 | 2024-06-01 | ECLOT           | L   | 0.760      | -            | -                | -                | -         |    -5.03 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           20 |     1692 | 2024-05-31 | SINNERS         | W   | 0.753      | 0.346        | 0.047 (0.012)    | 0.800 (0.208)    | 1 (0.753) |    15.98 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           19 |     1701 | 2024-05-31 | Johnny Speeds   | W   | 0.751      | 0.371        | 0.122 (0.034)    | 1.000 (0.278)    | 0 (0.000) |    20.24 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           18 |     1746 | 2024-05-29 | Rebels          | W   | 0.739      | 0.371        | 0.038 (0.010)    | 0.578 (0.158)    | 0 (0.000) |    13.70 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           17 |     1758 | 2024-05-28 | GL Academy      | L   | 0.734      | -            | -                | -                | -         |   -17.10 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           16 |     1828 | 2024-05-25 | Serbia          | L   | 0.712      | -            | -                | -                | -         |   -16.48 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           15 |     1854 | 2024-05-23 | SINNERS         | L   | 0.700      | -            | -                | -                | -         |    -7.66 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           14 |     1947 | 2024-05-21 | Rebels          | W   | 0.684      | 0.371        | 0.038 (0.010)    | 0.578 (0.147)    | -         |    12.04 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           13 |     2233 | 2024-05-13 | Johnny Speeds   | L   | 0.633      | -            | -                | -                | -         |    -2.74 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           12 |     2835 | 2024-04-18 | Johnny Speeds   | L   | 0.465      | -            | -                | -                | -         |    -2.03 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           11 |     2872 | 2024-04-17 | Viperio         | W   | 0.458      | -            | -                | -                | -         |     1.94 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|           10 |     2908 | 2024-04-16 | Lilmix          | W   | 0.451      | -            | -                | -                | -         |     0.59 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            9 |     2937 | 2024-04-14 | Sashi           | L   | 0.438      | -            | -                | -                | -         |    -3.84 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            8 |     3043 | 2024-04-10 | SINNERS         | L   | 0.411      | -            | -                | -                | -         |    -3.16 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            7 |     3171 | 2024-04-06 | Sashi           | L   | 0.385      | -            | -                | -                | -         |    -3.44 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            6 |     3182 | 2024-04-05 | ECLOT           | W   | 0.378      | 0.333        | 0.086 (0.011)    | 0.537 (0.068)    | -         |    10.20 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            5 |     3228 | 2024-04-04 | Sashi           | L   | 0.372      | -            | -                | -                | -         |    -3.28 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            4 |     3307 | 2024-04-02 | Illuminar       | W   | 0.359      | -            | -                | -                | -         |     0.88 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            3 |     3559 | 2024-03-17 | SINNERS         | L   | 0.253      | -            | -                | -                | -         |    -2.12 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            2 |     3574 | 2024-03-16 | ECLOT           | L   | 0.247      | -            | -                | -                | -         |    -1.16 | K1-FiDa, Levi, M1key, NIO, Pechyn     |
|            1 |     3590 | 2024-03-15 | SINNERS         | W   | 0.241      | 0.345        | 0.047 (0.004)    | 0.800 (0.066)    | 1 (0.241) |     5.62 | K1-FiDa, Levi, M1key, NIO, Pechyn     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,823.51)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-18 |      0.871 | $3,000.00      | $2,613.12       |
| 2024-06-02 |      0.766 | $3,048.00      | $2,336.17       |
| 2024-04-18 |      0.465 | $3,000.00      | $1,395.67       |
| 2024-04-06 |      0.385 | $3,000.00      | $1,153.76       |
| 2024-03-17 |      0.254 | $1,279.00      | $324.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
