### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [203](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_15.md)<br />
Regional Rank: [23]( ../../standings_asia_2024_10_15.md)<br />
<br />
Final Rank Value:  574.7<br />
<br />
Final Rank Value (574.7) = Starting Rank Value (551.3) + Head To Head Adjustments (23.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 551.3
- 400 + ( ( 0.078 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 551.3


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
|           14 |     1487 | 2024-08-28 | Bromo        | L   | 0.878      | -            | -                | -                | -         |   -15.90 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |     1534 | 2024-08-27 | Rare Atom    | L   | 0.872      | -            | -                | -                | -         |    -4.96 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |     1538 | 2024-08-27 | SHPL         | W   | 0.872      | 0.143        | 0.000 (0.000)    | 0.058 (0.007)    | 0 (0.000) |     7.31 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     2424 | 2024-08-01 | ATOX         | L   | 0.700      | -            | -                | -                | -         |    -2.63 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     2432 | 2024-08-01 | TYLOO        | L   | 0.699      | -            | -                | -                | -         |    -3.93 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     2550 | 2024-07-29 | Bromo        | W   | 0.679      | 0.143        | 0.000 (0.000)    | 0.219 (0.021)    | 0 (0.000) |     8.32 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     2555 | 2024-07-29 | -72c         | W   | 0.679      | 0.143        | 0.001 (0.000)    | 0.023 (0.002)    | 0 (0.000) |     9.02 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     2583 | 2024-07-28 | Niory        | W   | 0.673      | 0.143        | 0.000 (0.000)    | 0.088 (0.008)    | 0 (0.000) |     7.90 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     2611 | 2024-07-27 | Rare Atom    | L   | 0.665      | -            | -                | -                | -         |    -3.92 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     2633 | 2024-07-26 | FengDa       | W   | 0.660      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.75 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     3126 | 2024-07-13 | TYLOO        | L   | 0.573      | -            | -                | -                | -         |    -2.79 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     3152 | 2024-07-11 | The MongolZ  | W   | 0.560      | 0.143        | 0.631 (0.050)    | 0.488 (0.039)    | 0 (0.000) |    17.60 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     3154 | 2024-07-11 | Steel Helmet | W   | 0.559      | 0.143        | 0.000 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     5.30 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     3158 | 2024-07-11 | Rare Atom    | L   | 0.559      | -            | -                | -                | -         |    -3.59 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
