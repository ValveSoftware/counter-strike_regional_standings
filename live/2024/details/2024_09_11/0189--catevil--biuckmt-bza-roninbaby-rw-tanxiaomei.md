### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [189](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_11.md)<br />
Regional Rank: [23]( ../../standings_asia_2024_09_11.md)<br />
<br />
Final Rank Value:  603.6<br />
<br />
Final Rank Value (603.6) = Starting Rank Value (568.6) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 568.6
- 400 + ( ( 0.087 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 568.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      442 | 2024-08-28 | Bromo        | L   | 1.000      | -            | -                | -                | -         |   -18.17 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |      489 | 2024-08-27 | Rare Atom    | L   | 1.000      | -            | -                | -                | -         |    -5.43 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |      493 | 2024-08-27 | SHPL         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.075 (0.011)    | 0 (0.000) |     7.39 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     1379 | 2024-08-01 | ATOX         | L   | 0.926      | -            | -                | -                | -         |    -8.16 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     1387 | 2024-08-01 | TYLOO        | L   | 0.925      | -            | -                | -                | -         |    -4.68 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     1505 | 2024-07-29 | Bromo        | W   | 0.905      | 0.143        | 0.000 (0.000)    | 0.249 (0.032)    | 0 (0.000) |    10.29 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     1510 | 2024-07-29 | -72c         | W   | 0.905      | 0.143        | 0.003 (0.000)    | 0.108 (0.014)    | 0 (0.000) |    14.33 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     1538 | 2024-07-28 | Niory        | W   | 0.899      | 0.143        | 0.000 (0.000)    | 0.112 (0.014)    | 0 (0.000) |     9.58 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     1566 | 2024-07-27 | Rare Atom    | L   | 0.891      | -            | -                | -                | -         |    -4.82 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     1588 | 2024-07-26 | FengDa       | W   | 0.886      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.79 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     2081 | 2024-07-13 | TYLOO        | L   | 0.799      | -            | -                | -                | -         |    -3.30 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     2107 | 2024-07-11 | The MongolZ  | W   | 0.786      | 0.143        | 0.863 (0.097)    | 0.666 (0.075)    | 0 (0.000) |    24.71 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     2109 | 2024-07-11 | Steel Helmet | W   | 0.785      | 0.143        | 0.003 (0.000)    | 0.037 (0.004)    | 0 (0.000) |    11.10 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     2113 | 2024-07-11 | Rare Atom    | L   | 0.785      | -            | -                | -                | -         |    -4.57 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
