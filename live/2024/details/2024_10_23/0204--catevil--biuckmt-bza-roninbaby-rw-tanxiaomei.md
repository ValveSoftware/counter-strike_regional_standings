### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [204](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_23.md)<br />
Regional Rank: [24]( ../../standings_asia_2024_10_23.md)<br />
<br />
Final Rank Value:  576.8<br />
<br />
Final Rank Value (576.8) = Starting Rank Value (552.6) + Head To Head Adjustments (24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.6
- 400 + ( ( 0.078 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 552.6


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
|           14 |     1665 | 2024-08-28 | Bromo        | L   | 0.823      | -            | -                | -                | -         |   -14.22 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |     1712 | 2024-08-27 | Rare Atom    | L   | 0.817      | -            | -                | -                | -         |    -4.41 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |     1716 | 2024-08-27 | SHPL         | W   | 0.817      | 0.143        | 0.000 (0.000)    | 0.056 (0.007)    | 0 (0.000) |     6.84 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     2602 | 2024-08-01 | ATOX         | L   | 0.645      | -            | -                | -                | -         |    -1.26 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     2610 | 2024-08-01 | TYLOO        | L   | 0.644      | -            | -                | -                | -         |    -3.60 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     2728 | 2024-07-29 | Bromo        | W   | 0.625      | 0.143        | 0.000 (0.000)    | 0.247 (0.022)    | 0 (0.000) |     8.42 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     2733 | 2024-07-29 | -72c         | W   | 0.624      | 0.143        | 0.001 (0.000)    | 0.021 (0.002)    | 0 (0.000) |     8.37 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     2761 | 2024-07-28 | Niory        | W   | 0.618      | 0.143        | 0.000 (0.000)    | 0.085 (0.008)    | 0 (0.000) |     7.27 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     2789 | 2024-07-27 | Rare Atom    | L   | 0.611      | -            | -                | -                | -         |    -3.44 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     2811 | 2024-07-26 | FengDa       | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.29 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     3304 | 2024-07-13 | TYLOO        | L   | 0.518      | -            | -                | -                | -         |    -2.52 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     3330 | 2024-07-11 | The MongolZ  | W   | 0.505      | 0.143        | 0.696 (0.050)    | 0.597 (0.043)    | 0 (0.000) |    15.88 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     3332 | 2024-07-11 | Steel Helmet | W   | 0.504      | 0.143        | 0.000 (0.000)    | 0.028 (0.002)    | 0 (0.000) |     4.76 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     3336 | 2024-07-11 | Rare Atom    | L   | 0.504      | -            | -                | -                | -         |    -3.19 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
