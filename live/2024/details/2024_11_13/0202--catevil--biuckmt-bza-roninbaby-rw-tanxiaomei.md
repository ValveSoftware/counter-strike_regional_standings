### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [202](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_13.md)<br />
Regional Rank: [24]( ../../standings_asia_2024_11_13.md)<br />
<br />
Final Rank Value:  584.0<br />
<br />
Final Rank Value (584.0) = Starting Rank Value (555.3) + Head To Head Adjustments (28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.3
- 400 + ( ( 0.078 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 555.3


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
|           14 |     2105 | 2024-08-28 | Bromo        | L   | 0.684      | -            | -                | -                | -         |    -8.14 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |     2152 | 2024-08-27 | Rare Atom    | L   | 0.678      | -            | -                | -                | -         |    -2.55 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |     2156 | 2024-08-27 | SHPL         | W   | 0.677      | 0.143        | 0.000 (0.000)    | 0.047 (0.005)    | 0 (0.000) |     5.72 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     3042 | 2024-08-01 | ATOX         | L   | 0.506      | -            | -                | -                | -         |    -1.09 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     3050 | 2024-08-01 | TYLOO        | L   | 0.505      | -            | -                | -                | -         |    -1.54 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     3168 | 2024-07-29 | Bromo        | W   | 0.485      | 0.143        | 0.007 (0.000)    | 0.214 (0.015)    | 0 (0.000) |     9.67 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     3173 | 2024-07-29 | -72c         | W   | 0.485      | 0.143        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     6.33 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     3201 | 2024-07-28 | Niory        | W   | 0.479      | 0.143        | 0.000 (0.000)    | 0.071 (0.005)    | 0 (0.000) |     5.55 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     3229 | 2024-07-27 | Rare Atom    | L   | 0.471      | -            | -                | -                | -         |    -1.76 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     3251 | 2024-07-26 | FengDa       | W   | 0.465      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.09 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     3744 | 2024-07-13 | TYLOO        | L   | 0.379      | -            | -                | -                | -         |    -1.00 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     3770 | 2024-07-11 | The MongolZ  | W   | 0.365      | 0.143        | 1.000 (0.052)    | 0.636 (0.033)    | 0 (0.000) |    11.50 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     3772 | 2024-07-11 | Steel Helmet | W   | 0.365      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     3.40 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     3776 | 2024-07-11 | Rare Atom    | L   | 0.364      | -            | -                | -                | -         |    -1.46 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
