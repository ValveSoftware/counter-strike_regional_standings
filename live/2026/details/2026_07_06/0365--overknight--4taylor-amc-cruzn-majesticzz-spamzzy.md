### Roster Details<br />
Team Name: OverKnight<br />
Roster: 4TAYLOR, AMC, cruzN, Majesticzz, spamzzy<br />
Global Rank: [365](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [98]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  462.2<br />
<br />
Final Rank Value (462.2) = Starting Rank Value (487.0) + Head To Head Adjustments (-24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.0
- 400 + ( ( 0.046 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 487.0


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
|           16 |     1731 | 2026-04-29 | Shimmer        | L   | 0.749      | -            | -                | -                | -         |    -6.78 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |
|           15 |     1861 | 2026-04-26 | FarmVille      | L   | 0.729      | -            | -                | -                | -         |    -4.28 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           14 |     2606 | 2026-04-03 | FarmVille      | L   | 0.575      | -            | -                | -                | -         |    -3.32 | 4TAYLOR, AMC, b1, cruzN, Majesticzz            |
|           13 |     2693 | 2026-04-02 | 900FPSvsECO    | L   | 0.569      | -            | -                | -                | -         |    -5.00 | 4TAYLOR, AMC, b1, cruzN, Majesticzz            |
|           12 |     3470 | 2026-03-22 | F5             | L   | 0.497      | -            | -                | -                | -         |    -1.89 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|           11 |     3509 | 2026-03-21 | Chicken Coop   | L   | 0.490      | -            | -                | -                | -         |    -0.81 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|           10 |     3587 | 2026-03-20 | Mythic         | W   | 0.482      | 0.363        | 0.000 (0.000)    | 0.010 (0.002)    | 0 (0.000) |     7.84 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|            9 |     5067 | 2026-02-18 | Iowa Stormboar | L   | 0.282      | -            | -                | -                | -         |    -1.52 | 4TAYLOR, AMC, Majesticzz, SecretAgent, spamzzy |
|            8 |     5133 | 2026-02-17 | FlyQuest RED   | L   | 0.275      | -            | -                | -                | -         |    -3.21 | 4TAYLOR, AMC, Majesticzz, SecretAgent, spamzzy |
|            7 |     5283 | 2026-02-14 | LAG            | L   | 0.256      | -            | -                | -                | -         |    -0.34 | 4TAYLOR, AMC, Majesticzz, SecretAgent, spamzzy |
|            6 |     5391 | 2026-02-12 | Blitzkrieg     | L   | 0.244      | -            | -                | -                | -         |    -3.58 | 4TAYLOR, AMC, b1, Nivek1ng, spamzzy            |
|            5 |     5436 | 2026-02-11 | FarmVille      | L   | 0.237      | -            | -                | -                | -         |    -2.41 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            4 |     5562 | 2026-02-07 | Aether         | L   | 0.209      | -            | -                | -                | -         |    -1.62 | AMC, b1, Majesticzz, Nivek1ng, spamzzy         |
|            3 |     5626 | 2026-02-05 | Zomblers       | L   | 0.196      | -            | -                | -                | -         |    -1.30 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |
|            2 |     5650 | 2026-02-04 | F5             | W   | 0.190      | 0.333        | 0.005 (0.000)    | 0.281 (0.018)    | 0 (0.000) |     5.34 | 4TAYLOR, AMC, Majesticzz, Nivek1ng, spamzzy    |
|            1 |     5670 | 2026-02-03 | Outfit 49      | L   | 0.183      | -            | -                | -                | -         |    -1.96 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
