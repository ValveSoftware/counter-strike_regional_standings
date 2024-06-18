### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [1]( ../standings_americas.md)<br />
Final Rank Value:  1719.7<br />
<br />
Final Rank Value (1719.7) = Starting Rank Value (1808.9) + Head To Head Adjustments (-89.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.730[<sup>1</sup>](#table2)
- Bounty Collected: 0.679[<sup>2</sup>](#table1)
- Opponent Network: 0.365[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.693<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1808.9
- 400 + ( ( 0.693 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1808.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       22 | 2024-06-16 | Falcons           | W   | 1.000      | 0.500        | 0.381 (0.190)    | -                | 1 (1.000) |    10.32 | EliGE, floppy, Grim, hallzerk, JT |
|           34 |       31 | 2024-06-16 | Aurora            | W   | 1.000      | 0.500        | 0.526 (0.263)    | 0.874 (0.437)    | 1 (1.000) |     4.62 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |       61 | 2024-06-15 | MIBR              | W   | 1.000      | 0.500        | 0.281 (0.141)    | 0.688 (0.344)    | 1 (1.000) |     8.53 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |       96 | 2024-06-14 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -26.82 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      106 | 2024-06-14 | Alliance          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.34 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      430 | 2024-06-06 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -23.98 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      449 | 2024-06-06 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -25.68 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      460 | 2024-06-06 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -27.79 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      499 | 2024-06-05 | BIG               | W   | 1.000      | 0.715        | 0.225 (0.161)    | 0.433 (0.310)    | 1 (1.000) |     4.08 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      513 | 2024-06-05 | Eternal Fire      | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.485 (0.347)    | 1 (1.000) |    15.80 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |      736 | 2024-05-27 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -6.43 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |      748 | 2024-05-27 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -20.84 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1239 | 2024-05-11 | MOUZ              | L   | 0.950      | -            | -                | -                | -         |    -7.37 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1293 | 2024-05-09 | Virtus.pro        | W   | 0.935      | 0.889        | 0.345 (0.287)    | 0.427 (0.355)    | 1 (0.935) |    12.53 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1360 | 2024-05-05 | Natus Vincere     | W   | 0.910      | 0.889        | 1.000 (0.809)    | 0.337 (0.272)    | 1 (0.910) |    20.09 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     1426 | 2024-05-02 | HEROIC            | W   | 0.889      | 0.889        | 0.354 (0.280)    | 0.545 (0.431)    | 1 (0.889) |    13.21 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     1475 | 2024-04-30 | PERA              | W   | 0.875      | 0.889        | -                | 0.455 (0.354)    | 1 (0.875) |     0.26 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2399 | 2024-03-24 | FaZe              | L   | 0.628      | -            | -                | -                | -         |    -5.50 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2408 | 2024-03-23 | Vitality          | L   | 0.623      | -            | -                | -                | -         |    -5.24 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2423 | 2024-03-22 | MOUZ              | L   | 0.615      | -            | -                | -                | -         |    -4.38 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2441 | 2024-03-21 | HEROIC            | W   | 0.609      | 1.000        | 0.354 (0.216)    | 0.545 (0.332)    | -         |     9.91 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2450 | 2024-03-21 | paiN              | W   | 0.608      | 1.000        | 0.492 (0.299)    | 0.775 (0.471)    | -         |     5.26 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2763 | 2024-03-07 | OG                | L   | 0.517      | -            | -                | -                | -         |   -15.74 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     2855 | 2024-03-04 | Liquid            | W   | 0.497      | -            | -                | -                | -         |     4.81 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     2870 | 2024-03-03 | FURIA             | L   | 0.490      | -            | -                | -                | -         |   -10.70 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     2909 | 2024-03-02 | BOSS              | W   | 0.482      | -            | -                | -                | -         |     0.08 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     2928 | 2024-03-01 | Elevate           | W   | 0.476      | -            | -                | -                | -         |     0.10 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3415 | 2024-02-05 | Falcons           | L   | 0.310      | -            | -                | -                | -         |    -7.25 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3436 | 2024-02-04 | Spirit            | L   | 0.302      | -            | -                | -                | -         |    -2.49 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3456 | 2024-02-03 | Apeks             | W   | 0.296      | -            | -                | -                | -         |     0.20 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3675 | 2024-01-23 | Ninjas in Pyjamas | L   | 0.222      | -            | -                | -                | -         |    -6.97 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3703 | 2024-01-22 | Natus Vincere     | L   | 0.215      | -            | -                | -                | -         |    -2.26 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4060 | 2024-01-13 | Party Astronauts  | W   | 0.158      | -            | -                | -                | -         |     0.05 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4100 | 2024-01-12 | NRG               | W   | 0.152      | -            | -                | -                | -         |     0.03 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4111 | 2024-01-12 | FLUFFY AIMERS     | W   | 0.151      | -            | -                | -                | -         |     0.00 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($128,075.79)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.43) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-12 |      0.956 | $45,000.00     | $42,998.78      |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |
| 2024-03-10 |      0.537 | $5,000.00      | $2,683.33       |
| 2024-02-11 |      0.349 | $16,000.00     | $5,587.50       |
| 2024-01-28 |      0.256 | $5,000.00      | $1,279.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
