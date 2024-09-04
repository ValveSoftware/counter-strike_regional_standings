### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [188](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_04.md)<br />
Regional Rank: [23]( ../../standings_asia_2024_09_04.md)<br />
<br />
Final Rank Value:  611.7<br />
<br />
Final Rank Value (611.7) = Starting Rank Value (573.5) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 573.5
- 400 + ( ( 0.088 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 573.5


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
|           14 |      237 | 2024-08-28 | Bromo        | L   | 1.000      | -            | -                | -                | -         |   -18.36 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |      284 | 2024-08-27 | Rare Atom    | L   | 1.000      | -            | -                | -                | -         |    -5.23 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |      288 | 2024-08-27 | SHPL         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.076 (0.011)    | 0 (0.000) |     7.14 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     1174 | 2024-08-01 | ATOX         | L   | 0.973      | -            | -                | -                | -         |    -8.29 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     1182 | 2024-08-01 | TYLOO        | L   | 0.972      | -            | -                | -                | -         |    -4.63 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     1300 | 2024-07-29 | Bromo        | W   | 0.952      | 0.143        | 0.000 (0.000)    | 0.258 (0.035)    | 0 (0.000) |    10.65 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     1305 | 2024-07-29 | -72c         | W   | 0.952      | 0.143        | 0.003 (0.000)    | 0.113 (0.015)    | 0 (0.000) |    14.96 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     1333 | 2024-07-28 | Niory        | W   | 0.946      | 0.143        | 0.000 (0.000)    | 0.114 (0.015)    | 0 (0.000) |     9.86 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     1361 | 2024-07-27 | Rare Atom    | L   | 0.938      | -            | -                | -                | -         |    -4.88 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     1383 | 2024-07-26 | FengDa       | W   | 0.932      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.92 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     1876 | 2024-07-13 | TYLOO        | L   | 0.846      | -            | -                | -                | -         |    -3.24 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     1902 | 2024-07-11 | The MongolZ  | W   | 0.832      | 0.143        | 0.865 (0.103)    | 0.606 (0.072)    | 0 (0.000) |    26.18 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     1904 | 2024-07-11 | Steel Helmet | W   | 0.832      | 0.143        | 0.003 (0.000)    | 0.038 (0.004)    | 0 (0.000) |    11.74 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     1908 | 2024-07-11 | Rare Atom    | L   | 0.831      | -            | -                | -                | -         |    -4.67 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
