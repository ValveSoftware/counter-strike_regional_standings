### Roster Details<br />
Team Name: anything else<br />
Roster: corim, cypress, FAME, mcniff, Slash<br />
Global Rank: [279](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [84]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  458.7<br />
<br />
Final Rank Value (458.7) = Starting Rank Value (497.3) + Head To Head Adjustments (-38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.3
- 400 + ( ( 0.051 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 497.3


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
|           19 |     1018 | 2025-10-25 | regain       | L   | 0.955      | -            | -                | -                | -         |    -5.01 | corim, cypress, FAME, mcniff, Slash  |
|           18 |     1135 | 2025-10-23 | Wanted Goons | L   | 0.942      | -            | -                | -                | -         |   -11.47 | corim, cypress, FAME, mcniff, Slash  |
|           17 |     1177 | 2025-10-22 | Zomblers     | L   | 0.936      | -            | -                | -                | -         |    -7.34 | corim, cypress, FAME, mcniff, Prs    |
|           16 |     1237 | 2025-10-18 | Money Crew   | L   | 0.909      | -            | -                | -                | -         |    -9.55 | corim, cypress, K4mr0, mcniff, Slash |
|           15 |     1399 | 2025-10-13 | Voca         | L   | 0.875      | -            | -                | -                | -         |    -2.61 | corim, cypress, K4mr0, mcniff, Slash |
|           14 |     1598 | 2025-10-07 | Take Flyte   | L   | 0.835      | -            | -                | -                | -         |    -9.24 | corim, cypress, FAME, mcniff, Slash  |
|           13 |     1717 | 2025-10-05 | Mythic       | L   | 0.822      | -            | -                | -                | -         |    -7.90 | corim, cypress, FAME, mcniff, Slash  |
|           12 |     2563 | 2025-09-12 | LAG          | L   | 0.669      | -            | -                | -                | -         |    -4.87 | corim, cypress, FAME, mcniff, Slash  |
|           11 |     2610 | 2025-09-11 | NYX          | W   | 0.662      | 0.363        | 0.000 (0.000)    | 0.025 (0.006)    | 0 (0.000) |     9.89 | corim, cypress, FAME, mcniff, Slash  |
|           10 |     2658 | 2025-09-10 | regain       | W   | 0.656      | 0.363        | 0.003 (0.001)    | 0.364 (0.087)    | 0 (0.000) |    16.29 | corim, cypress, FAME, mcniff, Slash  |
|            9 |     2762 | 2025-09-08 | Mythic       | L   | 0.643      | -            | -                | -                | -         |    -5.64 | cypress, FAME, K4mr0, mcniff, Slash  |
|            8 |     3411 | 2025-08-13 | Wanted Goons | L   | 0.469      | -            | -                | -                | -         |    -7.01 | cypress, FAME, K4mr0, mcniff, Slash  |
|            7 |     3468 | 2025-08-12 | NRG          | L   | 0.462      | -            | -                | -                | -         |    -0.20 | cypress, FAME, K4mr0, mcniff, Slash  |
|            6 |     3512 | 2025-08-11 | MIGHT        | W   | 0.456      | 0.363        | 0.000 (0.000)    | 0.036 (0.006)    | 0 (0.000) |     6.78 | cypress, FAME, K4mr0, mcniff, Slash  |
|            5 |     4121 | 2025-07-11 | Getting Info | L   | 0.249      | -            | -                | -                | -         |    -1.82 | cypress, FAME, mcniff, Slash, Weeza  |
|            4 |     4135 | 2025-07-11 | TSG          | W   | 0.247      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.87 | cypress, FAME, mcniff, Slash, Weeza  |
|            3 |     4522 | 2025-06-12 | Nocturnal    | L   | 0.056      | -            | -                | -                | -         |    -0.53 | cypress, FAME, K4mr0, mcniff, Slash  |
|            2 |     4567 | 2025-06-10 | Subtick      | L   | 0.043      | -            | -                | -                | -         |    -0.85 | cypress, FAME, K4mr0, mcniff, Slash  |
|            1 |     4572 | 2025-06-10 | Money Crew   | L   | 0.041      | -            | -                | -                | -         |    -0.43 | cypress, FAME, K4mr0, mcniff, Slash  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
