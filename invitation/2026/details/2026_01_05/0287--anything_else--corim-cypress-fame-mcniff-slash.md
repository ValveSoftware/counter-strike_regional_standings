### Roster Details<br />
Team Name: anything else<br />
Roster: corim, cypress, FAME, mcniff, Slash<br />
Global Rank: [287](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [84]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  469.5<br />
<br />
Final Rank Value (469.5) = Starting Rank Value (500.8) + Head To Head Adjustments (-31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.8
- 400 + ( ( 0.051 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 500.8


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
|           16 |     1578 | 2025-10-25 | regain       | L   | 0.722      | -            | -                | -                | -         |    -4.10 | corim, cypress, FAME, mcniff, Slash  |
|           15 |     1695 | 2025-10-23 | Wanted Goons | L   | 0.709      | -            | -                | -                | -         |    -9.33 | corim, cypress, FAME, mcniff, Slash  |
|           14 |     1737 | 2025-10-22 | Zomblers     | L   | 0.703      | -            | -                | -                | -         |    -5.66 | corim, cypress, FAME, mcniff, Prs    |
|           13 |     1797 | 2025-10-18 | Money Crew   | L   | 0.676      | -            | -                | -                | -         |    -7.45 | corim, cypress, K4mr0, mcniff, Slash |
|           12 |     1959 | 2025-10-13 | Voca         | L   | 0.642      | -            | -                | -                | -         |    -1.43 | corim, cypress, K4mr0, mcniff, Slash |
|           11 |     2158 | 2025-10-07 | Take Flyte   | L   | 0.602      | -            | -                | -                | -         |    -6.93 | corim, cypress, FAME, mcniff, Slash  |
|           10 |     2277 | 2025-10-05 | Mythic       | L   | 0.589      | -            | -                | -                | -         |    -5.32 | corim, cypress, FAME, mcniff, Slash  |
|            9 |     3123 | 2025-09-12 | LAG          | L   | 0.436      | -            | -                | -                | -         |    -3.38 | corim, cypress, FAME, mcniff, Slash  |
|            8 |     3170 | 2025-09-11 | NYX          | W   | 0.429      | 0.363        | 0.000 (0.000)    | 0.017 (0.003)    | 0 (0.000) |     6.49 | corim, cypress, FAME, mcniff, Slash  |
|            7 |     3218 | 2025-09-10 | regain       | W   | 0.423      | 0.363        | 0.005 (0.001)    | 0.404 (0.062)    | 0 (0.000) |    10.41 | corim, cypress, FAME, mcniff, Slash  |
|            6 |     3322 | 2025-09-08 | Mythic       | L   | 0.410      | -            | -                | -                | -         |    -3.49 | cypress, FAME, K4mr0, mcniff, Slash  |
|            5 |     3971 | 2025-08-13 | Wanted Goons | L   | 0.236      | -            | -                | -                | -         |    -3.56 | cypress, FAME, K4mr0, mcniff, Slash  |
|            4 |     4028 | 2025-08-12 | NRG          | L   | 0.229      | -            | -                | -                | -         |    -0.04 | cypress, FAME, K4mr0, mcniff, Slash  |
|            3 |     4072 | 2025-08-11 | MIGHT        | W   | 0.223      | 0.363        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.54 | cypress, FAME, K4mr0, mcniff, Slash  |
|            2 |     4681 | 2025-07-11 | Getting Info | L   | 0.016      | -            | -                | -                | -         |    -0.15 | cypress, FAME, mcniff, Slash, Weeza  |
|            1 |     4695 | 2025-07-11 | TSG          | W   | 0.014      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.16 | cypress, FAME, mcniff, Slash, Weeza  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
