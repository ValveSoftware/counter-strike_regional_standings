### Roster Details<br />
Team Name: anything else<br />
Roster: corim, cypress, FAME, mcniff, Slash<br />
Global Rank: [322](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [90]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  459.8<br />
<br />
Final Rank Value (459.8) = Starting Rank Value (480.5) + Head To Head Adjustments (-20.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.5
- 400 + ( ( 0.043 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 480.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3358 | 2025-10-25 | regain       | L   | 0.349      | -            | -                | -                | -         |    -2.33 | corim, cypress, FAME, mcniff, Slash  |
|           10 |     3475 | 2025-10-23 | Wanted Goons | L   | 0.335      | -            | -                | -                | -         |    -4.97 | corim, cypress, FAME, mcniff, Slash  |
|            9 |     3517 | 2025-10-22 | Zomblers     | L   | 0.329      | -            | -                | -                | -         |    -2.23 | corim, cypress, FAME, mcniff, Prs    |
|            8 |     3577 | 2025-10-18 | Money Crew   | L   | 0.303      | -            | -                | -                | -         |    -5.75 | corim, cypress, K4mr0, mcniff, Slash |
|            7 |     3739 | 2025-10-13 | Voca         | L   | 0.269      | -            | -                | -                | -         |    -1.60 | corim, cypress, K4mr0, mcniff, Slash |
|            6 |     3938 | 2025-10-07 | Chicken Coop | L   | 0.229      | -            | -                | -                | -         |    -3.29 | corim, cypress, FAME, mcniff, Slash  |
|            5 |     4057 | 2025-10-05 | Mythic       | L   | 0.216      | -            | -                | -                | -         |    -1.82 | corim, cypress, FAME, mcniff, Slash  |
|            4 |     4903 | 2025-09-12 | LAG          | L   | 0.063      | -            | -                | -                | -         |    -0.31 | corim, cypress, FAME, mcniff, Slash  |
|            3 |     4950 | 2025-09-11 | NYX          | W   | 0.056      | 0.363        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.68 | corim, cypress, FAME, mcniff, Slash  |
|            2 |     4998 | 2025-09-10 | regain       | W   | 0.049      | 0.363        | 0.007 (0.000)    | 0.318 (0.006)    | 0 (0.000) |     1.20 | corim, cypress, FAME, mcniff, Slash  |
|            1 |     5102 | 2025-09-08 | Mythic       | L   | 0.036      | -            | -                | -                | -         |    -0.30 | cypress, FAME, K4mr0, mcniff, Slash  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
