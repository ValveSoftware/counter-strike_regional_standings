### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr<br />
Global Rank: [30](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  1336.7<br />
<br />
Final Rank Value (1336.7) = Starting Rank Value (1311.2) + Head To Head Adjustments (25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.544[<sup>1</sup>](#table2)
- Bounty Collected: 0.514[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.479<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1311.2
- 400 + ( ( 0.479 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1311.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       75 | 2025-11-25 | The Huns          | L   | 1.000      | -            | -                | -                | -         |   -25.14 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           39 |       97 | 2025-11-24 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -17.64 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           38 |      111 | 2025-11-24 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -7.87 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           37 |      224 | 2025-11-20 | Rare Atom         | W   | 1.000      | -            | -                | -                | -         |     6.58 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           36 |      265 | 2025-11-19 | Chinggis Warriors | W   | 1.000      | -            | -                | -                | -         |     2.83 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           35 |      303 | 2025-11-16 | Rare Atom         | W   | 1.000      | 0.428        | 0.041 (0.017)    | 0.395 (0.169)    | 1 (1.000) |     7.07 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           34 |      326 | 2025-11-15 | 9INE              | W   | 1.000      | 0.428        | 0.049 (0.021)    | 0.621 (0.266)    | 1 (1.000) |    15.19 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           33 |      347 | 2025-11-13 | Last Bullet       | W   | 1.000      | 0.428        | -                | 0.236 (0.101)    | 1 (1.000) |     1.32 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           32 |      708 | 2025-11-04 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -1.53 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           31 |      734 | 2025-11-03 | 3DMAX             | W   | 1.000      | 1.000        | 0.521 (0.521)    | 0.493 (0.493)    | 1 (1.000) |    25.55 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           30 |      760 | 2025-11-02 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -0.96 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           29 |     1354 | 2025-10-15 | 3DMAX             | L   | 0.885      | -            | -                | -                | -         |    -3.74 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           28 |     1383 | 2025-10-14 | GamerLegion       | W   | 0.879      | 1.000        | 0.263 (0.231)    | 0.402 (0.354)    | 1 (0.879) |    21.22 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           27 |     1391 | 2025-10-13 | MIBR              | L   | 0.877      | -            | -                | -                | -         |   -13.08 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           26 |     2463 | 2025-09-15 | Virtus.pro        | L   | 0.685      | -            | -                | -                | -         |   -14.09 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           25 |     2508 | 2025-09-14 | The MongolZ       | L   | 0.678      | -            | -                | -                | -         |    -1.06 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           24 |     2554 | 2025-09-13 | G2                | L   | 0.672      | -            | -                | -                | -         |    -2.36 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           23 |     2942 | 2025-08-31 | TYLOO             | L   | 0.584      | -            | -                | -                | -         |   -10.65 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           22 |     2967 | 2025-08-30 | B8                | W   | 0.578      | 0.412        | 0.220 (0.053)    | 0.341 (0.081)    | 1 (0.578) |    13.94 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           21 |     2976 | 2025-08-29 | Rare Atom         | W   | 0.577      | 0.412        | 0.041 (0.010)    | 0.395 (0.094)    | 1 (0.577) |     3.87 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           20 |     2990 | 2025-08-29 | Rare Atom         | W   | 0.572      | 0.333        | -                | 0.395 (0.075)    | -         |     3.98 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           19 |     3017 | 2025-08-28 | 3DMAX             | L   | 0.570      | -            | -                | -                | -         |    -2.19 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           18 |     3057 | 2025-08-27 | Rare Atom         | W   | 0.559      | -            | -                | -                | -         |     3.91 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           17 |     3392 | 2025-08-14 | The Huns          | W   | 0.473      | -            | -                | -                | -         |     3.17 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           16 |     3498 | 2025-08-12 | NomadS            | W   | 0.459      | -            | -                | -                | -         |     0.48 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           15 |     3546 | 2025-08-11 | MAXXPOWER         | W   | 0.453      | -            | -                | -                | -         |     0.08 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           14 |     3978 | 2025-07-18 | Astralis          | L   | 0.293      | -            | -                | -                | -         |    -1.23 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           13 |     4027 | 2025-07-16 | paiN              | W   | 0.279      | 1.000        | 0.353 (0.098)    | 0.353 (0.099)    | 1 (0.279) |     7.11 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           12 |     4052 | 2025-07-15 | 3DMAX             | W   | 0.271      | 1.000        | 0.521 (0.142)    | 0.493 (0.134)    | 1 (0.271) |     7.70 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           11 |     4475 | 2025-06-14 | Legacy            | L   | 0.067      | -            | -                | -                | -         |    -0.08 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|           10 |     4511 | 2025-06-13 | The MongolZ       | L   | 0.060      | -            | -                | -                | -         |    -0.09 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            9 |     4533 | 2025-06-12 | Spirit            | L   | 0.054      | -            | -                | -                | -         |    -0.21 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            8 |     4537 | 2025-06-12 | Liquid            | W   | 0.054      | 1.000        | 0.536 (0.029)    | -                | 1 (0.054) |     1.55 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            7 |     4574 | 2025-06-10 | B8                | W   | 0.041      | -            | -                | -                | -         |     1.05 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            6 |     4591 | 2025-06-09 | paiN              | L   | 0.034      | -            | -                | -                | -         |    -0.19 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            5 |     4609 | 2025-06-08 | TYLOO             | W   | 0.026      | -            | -                | -                | -         |     0.34 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            4 |     4616 | 2025-06-07 | Falcons           | W   | 0.021      | 0.769        | 0.831 (0.014)    | -                | -         |     0.64 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            3 |     4626 | 2025-06-07 | FURIA             | L   | 0.020      | -            | -                | -                | -         |    -0.01 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            2 |     4640 | 2025-06-06 | NRG               | W   | 0.013      | -            | -                | -                | -         |     0.00 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |
|            1 |     4648 | 2025-06-05 | Chinggis Warriors | W   | 0.008      | -            | -                | -                | -         |     0.03 | C4LLM3SU3, EmiliaQAQ, Starry, Westmelon, z4kr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($83,695.21)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      1.000 | $21,064.00     | $21,064.00      |
| 2025-11-09 |      1.000 | $25,000.00     | $25,000.00      |
| 2025-10-19 |      0.912 | $10,000.00     | $9,116.29       |
| 2025-09-21 |      0.728 | $7,500.00      | $5,456.36       |
| 2025-08-31 |      0.585 | $4,175.00      | $2,443.28       |
| 2025-08-29 |      0.572 | $5,000.00      | $2,862.38       |
| 2025-07-20 |      0.307 | $50,000.00     | $15,328.30      |
| 2025-06-22 |      0.121 | $20,000.00     | $2,424.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
