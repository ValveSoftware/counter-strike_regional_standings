### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [202](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_06.md)<br />
Regional Rank: [23]( ../../standings_asia_2024_11_06.md)<br />
<br />
Final Rank Value:  582.8<br />
<br />
Final Rank Value (582.8) = Starting Rank Value (555.5) + Head To Head Adjustments (27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.5
- 400 + ( ( 0.079 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 555.5


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
|           14 |     1936 | 2024-08-28 | Bromo        | L   | 0.731      | -            | -                | -                | -         |    -8.99 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |     1983 | 2024-08-27 | Rare Atom    | L   | 0.725      | -            | -                | -                | -         |    -4.17 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |     1987 | 2024-08-27 | SHPL         | W   | 0.725      | 0.143        | 0.000 (0.000)    | 0.052 (0.005)    | 0 (0.000) |     6.11 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     2873 | 2024-08-01 | ATOX         | L   | 0.553      | -            | -                | -                | -         |    -1.31 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     2881 | 2024-08-01 | TYLOO        | L   | 0.552      | -            | -                | -                | -         |    -1.83 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     2999 | 2024-07-29 | Bromo        | W   | 0.532      | 0.143        | 0.006 (0.000)    | 0.237 (0.018)    | 0 (0.000) |    10.32 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     3004 | 2024-07-29 | -72c         | W   | 0.532      | 0.143        | 0.001 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     6.93 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     3032 | 2024-07-28 | Niory        | W   | 0.526      | 0.143        | 0.000 (0.000)    | 0.080 (0.006)    | 0 (0.000) |     6.08 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     3060 | 2024-07-27 | Rare Atom    | L   | 0.518      | -            | -                | -                | -         |    -3.16 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     3082 | 2024-07-26 | FengDa       | W   | 0.513      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.49 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     3575 | 2024-07-13 | TYLOO        | L   | 0.426      | -            | -                | -                | -         |    -1.20 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     3601 | 2024-07-11 | The MongolZ  | W   | 0.413      | 0.143        | 1.000 (0.059)    | 0.632 (0.037)    | 0 (0.000) |    12.99 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     3603 | 2024-07-11 | Steel Helmet | W   | 0.412      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     3.85 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     3607 | 2024-07-11 | Rare Atom    | L   | 0.412      | -            | -                | -                | -         |    -2.78 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
