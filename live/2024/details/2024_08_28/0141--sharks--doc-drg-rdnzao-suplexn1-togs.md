### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, rdnzao, supLexN1, togs<br />
Global Rank: [141](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_08_28.md)<br />
Regional Rank: [39]( ../../standings_americas_2024_08_28.md)<br />
<br />
Final Rank Value:  738.3<br />
<br />
Final Rank Value (738.3) = Starting Rank Value (736.3) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 736.3
- 400 + ( ( 0.170 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 736.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3389 | 2024-04-26 | TYLOO    | L   | 0.374      | -            | -                | -                | -         |    -6.18 | doc, drg, rdnzao, supLexN1, togs  |
|           14 |     3421 | 2024-04-25 | M80      | L   | 0.367      | -            | -                | -                | -         |    -1.08 | doc, drg, rdnzao, supLexN1, togs  |
|           13 |     3461 | 2024-04-23 | Vitality | L   | 0.353      | -            | -                | -                | -         |    -0.01 | doc, drg, rdnzao, supLexN1, togs  |
|           12 |     3682 | 2024-04-16 | W7M      | L   | 0.309      | -            | -                | -                | -         |    -4.14 | doc, drg, rdnzao, supLexN1, togs  |
|           11 |     3750 | 2024-04-12 | Galorys  | L   | 0.282      | -            | -                | -                | -         |    -4.18 | doc, drg, rdnzao, supLexN1, togs  |
|           10 |     3799 | 2024-04-10 | ODDIK    | W   | 0.269      | 0.450        | 0.194 (0.023)    | 0.770 (0.093)    | 0 (0.000) |     7.49 | doc, drg, lukiz, rdnzao, supLexN1 |
|            9 |     3805 | 2024-04-10 | ODDIK    | L   | 0.268      | -            | -                | -                | -         |    -0.98 | doc, drg, lukiz, rdnzao, supLexN1 |
|            8 |     3904 | 2024-04-08 | paiN     | L   | 0.254      | -            | -                | -                | -         |    -0.05 | doc, drg, rdnzao, supLexN1, togs  |
|            7 |     3943 | 2024-04-07 | BESTIA   | W   | 0.246      | 0.435        | 0.115 (0.012)    | 0.778 (0.083)    | 0 (0.000) |     6.07 | doc, drg, rdnzao, supLexN1, togs  |
|            6 |     3954 | 2024-04-06 | ODDIK    | W   | 0.241      | 0.143        | 0.194 (0.007)    | 0.770 (0.026)    | 0 (0.000) |     6.86 | doc, drg, gafolo, supLexN1, togs  |
|            5 |     3974 | 2024-04-05 | paiN     | L   | 0.233      | -            | -                | -                | -         |    -0.04 | doc, drg, gafolo, supLexN1, togs  |
|            4 |     3992 | 2024-04-04 | paiN     | L   | 0.229      | -            | -                | -                | -         |    -0.04 | doc, drg, gafolo, supLexN1, togs  |
|            3 |     4000 | 2024-04-04 | paiN     | L   | 0.228      | -            | -                | -                | -         |    -0.04 | doc, drg, gafolo, supLexN1, togs  |
|            2 |     4078 | 2024-04-02 | BESTIA   | L   | 0.216      | -            | -                | -                | -         |    -1.36 | doc, drg, rdnzao, supLexN1, togs  |
|            1 |     4082 | 2024-04-02 | MIBR     | L   | 0.215      | -            | -                | -                | -         |    -0.26 | doc, drg, rdnzao, supLexN1, togs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,021.75)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.668 | $5,000.00      | $3,341.45       |
| 2024-05-12 |      0.480 | $3,500.00      | $1,680.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
