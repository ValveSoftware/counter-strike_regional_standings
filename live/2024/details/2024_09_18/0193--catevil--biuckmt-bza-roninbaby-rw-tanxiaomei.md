### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [193](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_09_18.md)<br />
Regional Rank: [23]( ../../standings_asia_2024_09_18.md)<br />
<br />
Final Rank Value:  605.6<br />
<br />
Final Rank Value (605.6) = Starting Rank Value (570.3) + Head To Head Adjustments (35.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 570.3
- 400 + ( ( 0.087 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 570.3


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
|           14 |      647 | 2024-08-28 | Bromo        | L   | 1.000      | -            | -                | -                | -         |   -18.28 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |      694 | 2024-08-27 | Rare Atom    | L   | 1.000      | -            | -                | -                | -         |    -5.26 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |      698 | 2024-08-27 | SHPL         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.076 (0.011)    | 0 (0.000) |     7.33 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     1584 | 2024-08-01 | ATOX         | L   | 0.880      | -            | -                | -                | -         |    -5.00 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     1592 | 2024-08-01 | TYLOO        | L   | 0.879      | -            | -                | -                | -         |    -4.41 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     1710 | 2024-07-29 | Bromo        | W   | 0.859      | 0.143        | 0.000 (0.000)    | 0.248 (0.030)    | 0 (0.000) |     9.80 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     1715 | 2024-07-29 | -72c         | W   | 0.859      | 0.143        | 0.002 (0.000)    | 0.108 (0.013)    | 0 (0.000) |    13.74 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     1743 | 2024-07-28 | Niory        | W   | 0.853      | 0.143        | 0.000 (0.000)    | 0.113 (0.014)    | 0 (0.000) |     9.14 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     1771 | 2024-07-27 | Rare Atom    | L   | 0.845      | -            | -                | -                | -         |    -4.50 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     1793 | 2024-07-26 | FengDa       | W   | 0.840      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.45 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     2286 | 2024-07-13 | TYLOO        | L   | 0.753      | -            | -                | -                | -         |    -3.11 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     2312 | 2024-07-11 | The MongolZ  | W   | 0.740      | 0.143        | 0.947 (0.100)    | 0.669 (0.071)    | 0 (0.000) |    23.27 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     2314 | 2024-07-11 | Steel Helmet | W   | 0.739      | 0.143        | 0.002 (0.000)    | 0.038 (0.004)    | 0 (0.000) |    10.36 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     2318 | 2024-07-11 | Rare Atom    | L   | 0.739      | -            | -                | -                | -         |    -4.21 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
