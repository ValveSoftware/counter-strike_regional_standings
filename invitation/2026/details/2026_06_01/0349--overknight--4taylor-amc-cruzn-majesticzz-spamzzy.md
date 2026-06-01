### Roster Details<br />
Team Name: OverKnight<br />
Roster: 4TAYLOR, AMC, cruzN, Majesticzz, spamzzy<br />
Global Rank: [349](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [95]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  457.4<br />
<br />
Final Rank Value (457.4) = Starting Rank Value (497.2) + Head To Head Adjustments (-39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.2
- 400 + ( ( 0.051 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 497.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1070 | 2026-04-29 | Shimmer        | L   | 0.982      | -            | -                | -                | -         |   -13.46 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |
|           15 |     1200 | 2026-04-26 | FarmVille      | L   | 0.962      | -            | -                | -                | -         |    -4.72 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           14 |     1945 | 2026-04-03 | FarmVille      | L   | 0.808      | -            | -                | -                | -         |    -3.68 | 4TAYLOR, AMC, b1, cruzN, Majesticzz            |
|           13 |     2032 | 2026-04-02 | 900FPSvsECO    | L   | 0.802      | -            | -                | -                | -         |    -6.50 | 4TAYLOR, AMC, b1, cruzN, Majesticzz            |
|           12 |     2809 | 2026-03-22 | F5             | L   | 0.730      | -            | -                | -                | -         |    -2.52 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|           11 |     2848 | 2026-03-21 | Chicken Coop   | L   | 0.723      | -            | -                | -                | -         |    -1.23 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|           10 |     2926 | 2026-03-20 | Mythic         | W   | 0.715      | 0.363        | 0.000 (0.000)    | 0.017 (0.004)    | 0 (0.000) |    10.66 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|            9 |     4406 | 2026-02-18 | Iowa Stormboar | L   | 0.516      | -            | -                | -                | -         |    -2.44 | 4TAYLOR, AMC, Majesticzz, SecretAgent, spamzzy |
|            8 |     4472 | 2026-02-17 | FlyQuest RED   | L   | 0.508      | -            | -                | -                | -         |    -5.87 | 4TAYLOR, AMC, Majesticzz, SecretAgent, spamzzy |
|            7 |     4622 | 2026-02-14 | LAG            | L   | 0.489      | -            | -                | -                | -         |    -0.38 | 4TAYLOR, AMC, Majesticzz, SecretAgent, spamzzy |
|            6 |     4730 | 2026-02-12 | Blitzkrieg     | L   | 0.477      | -            | -                | -                | -         |    -6.96 | 4TAYLOR, AMC, b1, Nivek1ng, spamzzy            |
|            5 |     4775 | 2026-02-11 | FarmVille      | L   | 0.470      | -            | -                | -                | -         |    -4.84 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            4 |     4901 | 2026-02-07 | Aether         | L   | 0.442      | -            | -                | -                | -         |    -3.09 | AMC, b1, Majesticzz, Nivek1ng, spamzzy         |
|            3 |     4965 | 2026-02-05 | Zomblers       | L   | 0.430      | -            | -                | -                | -         |    -2.54 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |
|            2 |     4989 | 2026-02-04 | F5             | W   | 0.423      | 0.333        | 0.007 (0.001)    | 0.335 (0.047)    | 0 (0.000) |    12.15 | 4TAYLOR, AMC, Majesticzz, Nivek1ng, spamzzy    |
|            1 |     5009 | 2026-02-03 | Outfit 49      | L   | 0.416      | -            | -                | -                | -         |    -4.37 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
