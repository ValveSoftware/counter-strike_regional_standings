### Roster Details<br />
Team Name: Skinsauna<br />
Roster: allu, HENU, Jelo<br />
Global Rank: [127](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [87]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  827.5<br />
<br />
Final Rank Value (827.5) = Starting Rank Value (800.2) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.274[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.2
- 400 + ( ( 0.210 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 800.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1244 | 2025-10-18 | ENCE Academy | W   | 0.907      | 0.309        | 0.005 (0.001)    | 0.488 (0.137)    | 1 (0.907) |    15.19 | allu, HENU, Jelo, juho, xseveN    |
|            5 |     1250 | 2025-10-18 | HAVU         | W   | 0.907      | 0.309        | 0.010 (0.003)    | 0.334 (0.094)    | 1 (0.907) |    17.54 | allu, HENU, Jelo, juho, xseveN    |
|            4 |     1273 | 2025-10-17 | ENCE Academy | L   | 0.900      | -            | -                | -                | -         |   -12.90 | allu, HENU, Jelo, juho, xseveN    |
|            3 |     1277 | 2025-10-17 | CSDIILIT     | W   | 0.899      | 0.309        | 0.004 (0.001)    | 0.142 (0.040)    | 1 (0.899) |     8.05 | allu, HENU, Jelo, juho, xseveN    |
|            2 |     4637 | 2025-06-06 | -72c         | L   | 0.014      | -            | -                | -                | -         |    -0.39 | Aerial, allu, HENU, Jelo, Sm1llee |
|            1 |     4649 | 2025-06-05 | CPH Wolves   | L   | 0.007      | -            | -                | -                | -         |    -0.10 | Aerial, allu, HENU, Jelo, Sm1llee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,162.29)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-18 |      0.907 | $3,485.00      | $3,162.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
