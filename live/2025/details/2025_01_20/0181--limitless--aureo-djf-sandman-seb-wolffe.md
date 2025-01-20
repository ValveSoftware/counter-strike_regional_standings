### Roster Details<br />
Team Name: Limitless<br />
Roster: Aureo, DJF, Sandman, Seb, Wolffe<br />
Global Rank: [181](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [51]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  639.5<br />
<br />
Final Rank Value (639.5) = Starting Rank Value (643.2) + Head To Head Adjustments (-3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.2
- 400 + ( ( 0.122 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 643.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3315 | 2024-08-19 | Priority      | L   | 0.180      | -            | -                | -                | -         |    -4.04 | Aureo, DJF, Sandman, Seb, Wolffe |
|            9 |     3449 | 2024-08-14 | undefined     | L   | 0.148      | -            | -                | -                | -         |    -2.13 | DJF, Seb, Tender, wiz, Wolffe    |
|            8 |     3464 | 2024-08-13 | FLUFFY AIMERS | W   | 0.141      | 0.477        | 0.015 (0.001)    | 0.399 (0.027)    | 0 (0.000) |     3.69 | DJF, Seb, Tender, wiz, Wolffe    |
|            7 |     3467 | 2024-08-13 | FLUFFY AIMERS | L   | 0.141      | -            | -                | -                | -         |    -0.76 | DJF, Seb, Tender, wiz, Wolffe    |
|            6 |     3915 | 2024-07-31 | M80           | L   | 0.054      | -            | -                | -                | -         |    -0.09 | DJF, Seb, Tender, wiz, Wolffe    |
|            5 |     3921 | 2024-07-31 | M80           | L   | 0.054      | -            | -                | -                | -         |    -0.09 | DJF, Seb, Tender, wiz, Wolffe    |
|            4 |     4162 | 2024-07-24 | LAG           | L   | 0.008      | -            | -                | -                | -         |    -0.12 | DJF, Seb, Tender, wiz, Wolffe    |
|            3 |     4166 | 2024-07-24 | LAG           | L   | 0.008      | -            | -                | -                | -         |    -0.12 | DJF, Seb, Tender, wiz, Wolffe    |
|            2 |     4194 | 2024-07-23 | Nouns         | L   | 0.001      | -            | -                | -                | -         |    -0.00 | DJF, Seb, Tender, wiz, Wolffe    |
|            1 |     4196 | 2024-07-23 | Nouns         | L   | 0.001      | -            | -                | -                | -         |    -0.00 | DJF, Seb, Tender, wiz, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($713.00)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
