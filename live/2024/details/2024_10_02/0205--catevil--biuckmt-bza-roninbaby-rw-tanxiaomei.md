### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [205](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_02.md)<br />
Regional Rank: [23]( ../../standings_asia_2024_10_02.md)<br />
<br />
Final Rank Value:  584.0<br />
<br />
Final Rank Value (584.0) = Starting Rank Value (554.3) + Head To Head Adjustments (29.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 554.3
- 400 + ( ( 0.081 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 554.3


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
|           14 |     1170 | 2024-08-28 | Bromo        | L   | 0.963      | -            | -                | -                | -         |   -17.22 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |     1217 | 2024-08-27 | Rare Atom    | L   | 0.957      | -            | -                | -                | -         |    -5.51 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |     1221 | 2024-08-27 | SHPL         | W   | 0.957      | 0.143        | 0.000 (0.000)    | 0.065 (0.009)    | 0 (0.000) |     7.69 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     2107 | 2024-08-01 | ATOX         | L   | 0.785      | -            | -                | -                | -         |    -4.94 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     2115 | 2024-08-01 | TYLOO        | L   | 0.784      | -            | -                | -                | -         |    -4.42 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     2233 | 2024-07-29 | Bromo        | W   | 0.765      | 0.143        | 0.000 (0.000)    | 0.209 (0.023)    | 0 (0.000) |     9.10 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     2238 | 2024-07-29 | -72c         | W   | 0.764      | 0.143        | 0.002 (0.000)    | 0.092 (0.010)    | 0 (0.000) |    12.38 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     2266 | 2024-07-28 | Niory        | W   | 0.758      | 0.143        | 0.000 (0.000)    | 0.099 (0.011)    | 0 (0.000) |     8.61 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     2294 | 2024-07-27 | Rare Atom    | L   | 0.751      | -            | -                | -                | -         |    -4.38 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     2316 | 2024-07-26 | FengDa       | W   | 0.745      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.25 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     2809 | 2024-07-13 | TYLOO        | L   | 0.658      | -            | -                | -                | -         |    -3.13 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     2835 | 2024-07-11 | The MongolZ  | W   | 0.645      | 0.143        | 0.676 (0.062)    | 0.528 (0.049)    | 0 (0.000) |    20.27 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     2837 | 2024-07-11 | Steel Helmet | W   | 0.644      | 0.143        | 0.001 (0.000)    | 0.032 (0.003)    | 0 (0.000) |     9.00 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     2841 | 2024-07-11 | Rare Atom    | L   | 0.644      | -            | -                | -                | -         |    -4.06 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
