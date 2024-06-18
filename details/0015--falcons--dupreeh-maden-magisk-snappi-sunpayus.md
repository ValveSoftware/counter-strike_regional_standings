### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [15](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1581.2<br />
<br />
Final Rank Value (1581.2) = Starting Rank Value (1608.7) + Head To Head Adjustments (-27.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.705[<sup>1</sup>](#table2)
- Bounty Collected: 0.580[<sup>2</sup>](#table1)
- Opponent Network: 0.279[<sup>2</sup>](#table1)
- LAN Wins: 0.816[<sup>2</sup>](#table1)

The average of these factors is 0.595<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1608.7
- 400 + ( ( 0.595 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1608.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       22 | 2024-06-16 | Complexity       | L   | 1.000      | -            | -                | -                | -         |   -10.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |       27 | 2024-06-16 | ENCE             | W   | 1.000      | 0.500        | 0.229 (0.114)    | 0.424 (0.212)    | 1 (1.000) |     8.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |       56 | 2024-06-15 | The MongolZ      | W   | 1.000      | 0.500        | 0.986 (0.493)    | 0.681 (0.341)    | 1 (1.000) |    25.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |       66 | 2024-06-15 | Party Astronauts | W   | 1.000      | 0.500        | -                | 0.600 (0.300)    | 1 (1.000) |     1.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      109 | 2024-06-14 | Aurora           | L   | 1.000      | -            | -                | -                | -         |   -24.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      717 | 2024-05-28 | Liquid           | L   | 1.000      | -            | -                | -                | -         |   -12.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      738 | 2024-05-27 | Monte            | W   | 1.000      | 0.624        | 0.189 (0.118)    | 0.674 (0.421)    | 1 (1.000) |     4.66 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      750 | 2024-05-27 | G2               | L   | 1.000      | -            | -                | -                | -         |    -5.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1001 | 2024-05-18 | Spirit           | L   | 0.994      | -            | -                | -                | -         |    -2.82 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1031 | 2024-05-17 | Virtus.pro       | W   | 0.988      | 0.769        | 0.345 (0.262)    | 0.427 (0.324)    | 1 (0.988) |    21.94 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1105 | 2024-05-15 | BetBoom          | W   | 0.976      | 0.769        | 0.414 (0.310)    | 0.798 (0.598)    | 1 (0.976) |    11.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1171 | 2024-05-14 | Virtus.pro       | L   | 0.969      | -            | -                | -                | -         |    -7.99 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1544 | 2024-04-27 | G2               | L   | 0.855      | -            | -                | -                | -         |    -4.26 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1569 | 2024-04-26 | BetBoom          | L   | 0.848      | -            | -                | -                | -         |   -15.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1595 | 2024-04-25 | TYLOO            | W   | 0.841      | 0.889        | 0.049 (0.037)    | 0.241 (0.180)    | 1 (0.841) |     0.36 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     1615 | 2024-04-24 | The MongolZ      | L   | 0.835      | -            | -                | -                | -         |    -4.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2791 | 2024-03-06 | Metizport        | L   | 0.510      | -            | -                | -                | -         |   -15.54 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           13 |     3242 | 2024-02-16 | AMKAL            | L   | 0.381      | -            | -                | -                | -         |   -11.04 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           12 |     3272 | 2024-02-15 | Eternal Fire     | L   | 0.374      | -            | -                | -                | -         |    -3.19 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           11 |     3298 | 2024-02-14 | FaZe             | L   | 0.369      | -            | -                | -                | -         |    -1.51 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           10 |     3302 | 2024-02-14 | 3DMAX            | W   | 0.368      | -            | -                | -                | 1 (0.368) |     1.12 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     3358 | 2024-02-10 | Spirit           | L   | 0.343      | -            | -                | -                | -         |    -1.23 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     3371 | 2024-02-09 | ENCE             | W   | 0.337      | 1.000        | 0.229 (0.077)    | 0.424 (0.143)    | 1 (0.337) |     4.27 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     3406 | 2024-02-06 | Natus Vincere    | W   | 0.315      | 1.000        | 1.000 (0.315)    | -                | 1 (0.315) |     8.55 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     3415 | 2024-02-05 | Complexity       | W   | 0.310      | 1.000        | 0.426 (0.132)    | 0.442 (0.137)    | -         |     7.25 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     3429 | 2024-02-04 | Rebels           | W   | 0.303      | 1.000        | -                | 0.450 (0.136)    | -         |     0.52 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     3471 | 2024-02-03 | Eternal Fire     | L   | 0.295      | -            | -                | -                | -         |    -2.28 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     3621 | 2024-01-26 | Vitality         | L   | 0.241      | -            | -                | -                | -         |    -0.84 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     3667 | 2024-01-23 | OG               | W   | 0.223      | 0.581        | 0.235 (0.031)    | -                | -         |     0.62 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     3695 | 2024-01-22 | Astralis         | L   | 0.216      | -            | -                | -                | -         |    -1.00 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($114,485.44)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.38) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-19 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |
| 2024-03-10 |      0.537 | $5,000.00      | $2,683.33       |
| 2024-02-11 |      0.349 | $80,000.00     | $27,937.50      |
| 2024-01-28 |      0.256 | $8,500.00      | $2,175.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
