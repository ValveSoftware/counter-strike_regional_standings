### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [203](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_09.md)<br />
Regional Rank: [22]( ../../standings_asia_2024_10_09.md)<br />
<br />
Final Rank Value:  578.3<br />
<br />
Final Rank Value (578.3) = Starting Rank Value (553.6) + Head To Head Adjustments (24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 553.6
- 400 + ( ( 0.079 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 553.6


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
|           14 |     1390 | 2024-08-28 | Bromo        | L   | 0.918      | -            | -                | -                | -         |   -16.65 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |     1437 | 2024-08-27 | Rare Atom    | L   | 0.912      | -            | -                | -                | -         |    -5.11 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |     1441 | 2024-08-27 | SHPL         | W   | 0.911      | 0.143        | 0.000 (0.000)    | 0.060 (0.008)    | 0 (0.000) |     7.51 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     2327 | 2024-08-01 | ATOX         | L   | 0.739      | -            | -                | -                | -         |    -3.02 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     2335 | 2024-08-01 | TYLOO        | L   | 0.739      | -            | -                | -                | -         |    -4.12 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     2453 | 2024-07-29 | Bromo        | W   | 0.719      | 0.143        | 0.000 (0.000)    | 0.192 (0.020)    | 0 (0.000) |     8.71 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     2458 | 2024-07-29 | -72c         | W   | 0.719      | 0.143        | 0.002 (0.000)    | 0.084 (0.009)    | 0 (0.000) |     9.51 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     2486 | 2024-07-28 | Niory        | W   | 0.713      | 0.143        | 0.000 (0.000)    | 0.091 (0.009)    | 0 (0.000) |     8.26 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     2514 | 2024-07-27 | Rare Atom    | L   | 0.705      | -            | -                | -                | -         |    -4.09 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     2536 | 2024-07-26 | FengDa       | W   | 0.699      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.00 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     3029 | 2024-07-13 | TYLOO        | L   | 0.613      | -            | -                | -                | -         |    -2.94 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     3055 | 2024-07-11 | The MongolZ  | W   | 0.599      | 0.143        | 0.670 (0.057)    | 0.515 (0.044)    | 0 (0.000) |    18.84 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     3057 | 2024-07-11 | Steel Helmet | W   | 0.599      | 0.143        | 0.000 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     5.62 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     3061 | 2024-07-11 | Rare Atom    | L   | 0.598      | -            | -                | -                | -         |    -3.78 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
