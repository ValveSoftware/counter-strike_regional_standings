### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1817.6<br />
<br />
Final Rank Value (1817.6) = Starting Rank Value (1903.3) + Head To Head Adjustments (-85.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.793[<sup>1</sup>](#table2)
- Bounty Collected: 0.691[<sup>2</sup>](#table1)
- Opponent Network: 0.398[<sup>2</sup>](#table1)
- LAN Wins: 0.917[<sup>2</sup>](#table1)

The average of these factors is 0.700<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1903.3
- 400 + ( ( 0.700 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1903.3


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
|           37 |      379 | 2024-06-14 | Virtus.pro        | L   | 0.981      | -            | -                | -                | -         |   -19.71 | br0, device, jabbi, Staehr, stavn    |
|           36 |      438 | 2024-06-13 | SAW               | W   | 0.972      | 0.729        | -                | 0.544 (0.386)    | 1 (0.972) |     0.93 | br0, device, jabbi, Staehr, stavn    |
|           35 |      461 | 2024-06-12 | Natus Vincere     | L   | 0.966      | -            | -                | -                | -         |   -14.39 | br0, device, jabbi, Staehr, stavn    |
|           34 |      619 | 2024-06-08 | The MongolZ       | L   | 0.940      | -            | -                | -                | -         |   -12.67 | br0, device, jabbi, Staehr, stavn    |
|           33 |      670 | 2024-06-07 | BetBoom           | W   | 0.933      | 0.715        | 0.403 (0.269)    | 0.704 (0.470)    | 1 (0.933) |     4.16 | br0, device, jabbi, Staehr, stavn    |
|           32 |      731 | 2024-06-06 | The MongolZ       | W   | 0.927      | 0.715        | 1.000 (0.663)    | 0.653 (0.433)    | 1 (0.927) |    17.13 | br0, device, jabbi, Staehr, stavn    |
|           31 |      751 | 2024-06-06 | ENCE              | W   | 0.926      | 0.715        | 0.212 (0.141)    | 0.377 (0.249)    | 1 (0.926) |     1.65 | br0, device, jabbi, Staehr, stavn    |
|           30 |      757 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.925      | -            | -                | -                | -         |   -21.16 | br0, device, jabbi, Staehr, stavn    |
|           29 |      802 | 2024-06-05 | Sashi             | L   | 0.919      | -            | -                | -                | -         |   -28.19 | br0, device, jabbi, Staehr, stavn    |
|           28 |      814 | 2024-06-05 | HEROIC            | W   | 0.918      | 0.715        | 0.333 (0.219)    | 0.448 (0.294)    | 1 (0.918) |     8.24 | br0, device, jabbi, Staehr, stavn    |
|           27 |     1161 | 2024-05-22 | Liquid            | L   | 0.826      | -            | -                | -                | -         |   -21.80 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1203 | 2024-05-21 | Aurora            | W   | 0.819      | 0.769        | 0.514 (0.324)    | 0.813 (0.512)    | -         |     3.11 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1233 | 2024-05-20 | BetBoom           | W   | 0.814      | 0.769        | 0.403 (0.252)    | 0.704 (0.440)    | -         |     2.50 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1256 | 2024-05-19 | BIG               | W   | 0.808      | -            | -                | -                | -         |     1.31 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1548 | 2024-05-11 | Vitality          | L   | 0.753      | -            | -                | -                | -         |    -8.62 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1569 | 2024-05-10 | Liquid            | W   | 0.746      | 0.889        | 0.494 (0.328)    | 0.510 (0.338)    | 1 (0.746) |     3.36 | br0, device, jabbi, Staehr, stavn    |
|           21 |     1835 | 2024-04-27 | 3DMAX             | W   | 0.660      | 0.889        | -                | 1.000 (0.587)    | 1 (0.660) |     0.56 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1905 | 2024-04-24 | FaZe              | W   | 0.641      | 0.889        | 0.902 (0.513)    | 0.479 (0.273)    | 1 (0.641) |    10.92 | br0, device, jabbi, Staehr, stavn    |
|           19 |     1926 | 2024-04-23 | Eternal Fire      | W   | 0.633      | 0.889        | 1.000 (0.563)    | -                | 1 (0.633) |     5.91 | br0, device, jabbi, Staehr, stavn    |
|           18 |     2212 | 2024-04-13 | FaZe              | L   | 0.566      | -            | -                | -                | -         |    -8.48 | br0, device, jabbi, Staehr, stavn    |
|           17 |     2309 | 2024-04-10 | Virtus.pro        | W   | 0.545      | -            | -                | -                | 1 (0.545) |     5.19 | br0, device, jabbi, Staehr, stavn    |
|           16 |     2361 | 2024-04-09 | FaZe              | W   | 0.538      | 0.624        | 0.902 (0.303)    | -                | -         |     9.13 | br0, device, jabbi, Staehr, stavn    |
|           15 |     2393 | 2024-04-08 | Steel Helmet      | W   | 0.531      | -            | -                | -                | -         |     0.02 | br0, device, jabbi, Staehr, stavn    |
|           14 |     3362 | 2024-02-23 | 9 Pandas          | L   | 0.232      | -            | -                | -                | -         |    -7.22 | blameF, device, jabbi, Staehr, stavn |
|           13 |     3381 | 2024-02-22 | ENCE              | L   | 0.226      | -            | -                | -                | -         |    -6.52 | blameF, device, jabbi, Staehr, stavn |
|           12 |     3408 | 2024-02-21 | Monte             | W   | 0.219      | -            | -                | -                | -         |     0.10 | blameF, device, jabbi, Staehr, stavn |
|           11 |     3436 | 2024-02-20 | HEROIC            | L   | 0.212      | -            | -                | -                | -         |    -4.60 | blameF, device, jabbi, Staehr, stavn |
|           10 |     3449 | 2024-02-19 | Spirit            | L   | 0.208      | -            | -                | -                | -         |    -2.40 | blameF, device, jabbi, Staehr, stavn |
|            9 |     3459 | 2024-02-19 | Nexus             | W   | 0.206      | -            | -                | -                | -         |     0.02 | blameF, device, jabbi, Staehr, stavn |
|            8 |     3817 | 2024-02-01 | ENCE              | L   | 0.088      | -            | -                | -                | -         |    -2.56 | blameF, device, jabbi, Staehr, stavn |
|            7 |     3846 | 2024-01-31 | HEROIC            | L   | 0.080      | -            | -                | -                | -         |    -1.75 | blameF, device, jabbi, Staehr, stavn |
|            6 |     3883 | 2024-01-28 | BIG               | W   | 0.060      | -            | -                | -                | -         |     0.10 | blameF, device, jabbi, Staehr, stavn |
|            5 |     3899 | 2024-01-27 | Vitality          | L   | 0.053      | -            | -                | -                | -         |    -0.62 | blameF, device, jabbi, Staehr, stavn |
|            4 |     3965 | 2024-01-23 | Vitality          | W   | 0.027      | -            | -                | -                | -         |     0.54 | blameF, device, jabbi, Staehr, stavn |
|            3 |     3992 | 2024-01-22 | Falcons           | W   | 0.021      | -            | -                | -                | -         |     0.08 | blameF, device, jabbi, Staehr, stavn |
|            2 |     4062 | 2024-01-20 | PERA              | W   | 0.007      | -            | -                | -                | -         |     0.00 | blameF, device, jabbi, Staehr, stavn |
|            1 |     4112 | 2024-01-19 | AMKAL             | L   | 0.001      | -            | -                | -                | -         |    -0.03 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($134,725.16)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.55) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $20,000.00     | $19,872.58      |
| 2024-06-09 |      0.947 | $28,000.00     | $26,515.21      |
| 2024-05-23 |      0.834 | $50,000.00     | $41,687.86      |
| 2024-05-12 |      0.760 | $45,000.00     | $34,211.03      |
| 2024-04-14 |      0.572 | $20,000.00     | $11,442.45      |
| 2024-02-02 |      0.095 | $2,500.00      | $237.19         |
| 2024-01-28 |      0.061 | $12,500.00     | $758.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
