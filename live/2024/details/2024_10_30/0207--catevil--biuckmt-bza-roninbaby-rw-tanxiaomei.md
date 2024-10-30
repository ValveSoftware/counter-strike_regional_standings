### Roster Details<br />
Team Name: CatEvil<br />
Roster: Biuckmt, BZA, Roninbaby, RW, tanxiaomei<br />
Global Rank: [207](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_30.md)<br />
Regional Rank: [24]( ../../standings_asia_2024_10_30.md)<br />
<br />
Final Rank Value:  574.7<br />
<br />
Final Rank Value (574.7) = Starting Rank Value (552.2) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 552.2
- 400 + ( ( 0.077 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 552.2


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
|           14 |     1795 | 2024-08-28 | Bromo        | L   | 0.777      | -            | -                | -                | -         |   -13.35 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           13 |     1842 | 2024-08-27 | Rare Atom    | L   | 0.771      | -            | -                | -                | -         |    -4.18 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           12 |     1846 | 2024-08-27 | SHPL         | W   | 0.771      | 0.143        | 0.000 (0.000)    | 0.052 (0.006)    | 0 (0.000) |     6.53 | Biuckmt, BZA, Roninbaby, RW, tanxiaomei        |
|           11 |     2732 | 2024-08-01 | ATOX         | L   | 0.599      | -            | -                | -                | -         |    -1.06 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|           10 |     2740 | 2024-08-01 | TYLOO        | L   | 0.598      | -            | -                | -                | -         |    -3.30 | Biuckmt, BZA, Roninbaby, splashske, tanxiaomei |
|            9 |     2858 | 2024-07-29 | Bromo        | W   | 0.579      | 0.143        | 0.000 (0.000)    | 0.233 (0.019)    | 0 (0.000) |     7.91 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            8 |     2863 | 2024-07-29 | -72c         | W   | 0.578      | 0.143        | 0.001 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     7.85 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            7 |     2891 | 2024-07-28 | Niory        | W   | 0.572      | 0.143        | 0.000 (0.000)    | 0.080 (0.007)    | 0 (0.000) |     6.80 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            6 |     2919 | 2024-07-27 | Rare Atom    | L   | 0.565      | -            | -                | -                | -         |    -3.19 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            5 |     2941 | 2024-07-26 | FengDa       | W   | 0.559      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.93 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            4 |     3434 | 2024-07-13 | TYLOO        | L   | 0.472      | -            | -                | -                | -         |    -2.29 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            3 |     3460 | 2024-07-11 | The MongolZ  | W   | 0.459      | 0.143        | 0.698 (0.046)    | 0.592 (0.039)    | 0 (0.000) |    14.44 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            2 |     3462 | 2024-07-11 | Steel Helmet | W   | 0.458      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     4.33 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |
|            1 |     3466 | 2024-07-11 | Rare Atom    | L   | 0.458      | -            | -                | -                | -         |    -2.88 | Biuckmt, BZA, lan, Roninbaby, tanxiaomei       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
