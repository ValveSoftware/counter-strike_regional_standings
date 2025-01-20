### Roster Details<br />
Team Name: Limitless<br />
Roster: Aureo, DJF, Sandman, Seb, Wolffe<br />
Global Rank: [181](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [51]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  639.5<br />
<br />
Final Rank Value (639.5) = Starting Rank Value (643.9) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.9
- 400 + ( ( 0.123 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 643.9


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
|           10 |     3306 | 2024-08-19 | Priority      | L   | 0.194      | -            | -                | -                | -         |    -4.34 | Aureo, DJF, Sandman, Seb, Wolffe |
|            9 |     3440 | 2024-08-14 | undefined     | L   | 0.161      | -            | -                | -                | -         |    -2.31 | DJF, Seb, Tender, wiz, Wolffe    |
|            8 |     3455 | 2024-08-13 | FLUFFY AIMERS | W   | 0.155      | 0.477        | 0.016 (0.001)    | 0.402 (0.030)    | 0 (0.000) |     4.05 | DJF, Seb, Tender, wiz, Wolffe    |
|            7 |     3458 | 2024-08-13 | FLUFFY AIMERS | L   | 0.154      | -            | -                | -                | -         |    -0.83 | DJF, Seb, Tender, wiz, Wolffe    |
|            6 |     3906 | 2024-07-31 | M80           | L   | 0.068      | -            | -                | -                | -         |    -0.11 | DJF, Seb, Tender, wiz, Wolffe    |
|            5 |     3912 | 2024-07-31 | M80           | L   | 0.068      | -            | -                | -                | -         |    -0.11 | DJF, Seb, Tender, wiz, Wolffe    |
|            4 |     4153 | 2024-07-24 | LAG           | L   | 0.021      | -            | -                | -                | -         |    -0.34 | DJF, Seb, Tender, wiz, Wolffe    |
|            3 |     4157 | 2024-07-24 | LAG           | L   | 0.021      | -            | -                | -                | -         |    -0.33 | DJF, Seb, Tender, wiz, Wolffe    |
|            2 |     4185 | 2024-07-23 | Nouns         | L   | 0.015      | -            | -                | -                | -         |    -0.03 | DJF, Seb, Tender, wiz, Wolffe    |
|            1 |     4187 | 2024-07-23 | Nouns         | L   | 0.015      | -            | -                | -                | -         |    -0.03 | DJF, Seb, Tender, wiz, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($729.29)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
