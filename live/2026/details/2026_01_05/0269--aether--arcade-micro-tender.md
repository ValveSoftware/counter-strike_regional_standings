### Roster Details<br />
Team Name: Aether<br />
Roster: arcade, micro, Tender<br />
Global Rank: [269](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [75]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  516.8<br />
<br />
Final Rank Value (516.8) = Starting Rank Value (519.1) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.1
- 400 + ( ( 0.060 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 519.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1475 | 2025-10-27 | BOSS         | L   | 0.736      | -            | -                | -                | -         |    -4.10 | arcade, ayaneuu, micro, Sathsea, Tender  |
|           10 |     1515 | 2025-10-26 | Voca         | L   | 0.730      | -            | -                | -                | -         |    -1.79 | arcade, ayaneuu, micro, Sathsea, Tender  |
|            9 |     3664 | 2025-08-24 | BOSS         | L   | 0.309      | -            | -                | -                | -         |    -1.85 | arcade, Jeebs, micro, obi, Tender        |
|            8 |     3696 | 2025-08-22 | Sakura       | W   | 0.296      | 0.333        | 0.059 (0.006)    | 0.277 (0.027)    | 0 (0.000) |     8.33 | arcade, micro, N2o, obi, Tender          |
|            7 |     3759 | 2025-08-20 | MIGHT        | W   | 0.278      | 0.333        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     3.00 | arcade, micro, N2o, obi, Tender          |
|            6 |     3767 | 2025-08-19 | Zomblers     | L   | 0.276      | -            | -                | -                | -         |    -2.46 | arcade, micro, N2o, obi, Tender          |
|            5 |     3800 | 2025-08-17 | Phoenix      | L   | 0.262      | -            | -                | -                | -         |    -1.98 | arcade, arias, clipzera, micro, Tender   |
|            4 |     3831 | 2025-08-16 | NRG          | L   | 0.256      | -            | -                | -                | -         |    -0.05 | arcade, arias, clipzera, Sathsea, Tender |
|            3 |     3969 | 2025-08-13 | MIGHT        | L   | 0.236      | -            | -                | -                | -         |    -4.95 | arcade, arias, clipzera, micro, Tender   |
|            2 |     4023 | 2025-08-12 | M80          | L   | 0.229      | -            | -                | -                | -         |    -0.03 | arcade, arias, clipzera, micro, Tender   |
|            1 |     4069 | 2025-08-11 | Wanted Goons | W   | 0.223      | 0.363        | 0.000 (0.000)    | 0.141 (0.011)    | 0 (0.000) |     3.52 | arcade, arias, clipzera, micro, Tender   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
