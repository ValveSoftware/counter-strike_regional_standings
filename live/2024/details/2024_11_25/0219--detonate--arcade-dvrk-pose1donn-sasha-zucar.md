### Roster Details<br />
Team Name: DETONATE<br />
Roster: arcade, dvrk, Pose1doNN, sasha, Zucar<br />
Global Rank: [219](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_25.md)<br />
Regional Rank: [64]( ../../standings_americas_2024_11_25.md)<br />
<br />
Final Rank Value:  498.0<br />
<br />
Final Rank Value (498.0) = Starting Rank Value (502.0) + Head To Head Adjustments (-4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.0
- 400 + ( ( 0.051 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 502.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1574 | 2024-09-23 | Aether        | L   | 0.782      | -            | -                | -                | -         |   -12.91 | arcade, dvrk, Pose1doNN, sasha, Zucar   |
|           13 |     1644 | 2024-09-20 | InControl     | L   | 0.764      | -            | -                | -                | -         |    -7.64 | arcade, dvrk, Pose1doNN, sasha, Zucar   |
|           12 |     1789 | 2024-09-15 | Maximum Ego   | W   | 0.730      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.65 | arcade, dvrk, Pose1doNN, sasha, Zucar   |
|           11 |     1954 | 2024-09-10 | E-Xolos LAZER | L   | 0.697      | -            | -                | -                | -         |    -3.89 | arcade, dvrk, Pose1doNN, sasha, Zucar   |
|           10 |     2773 | 2024-08-17 | NRG           | L   | 0.536      | -            | -                | -                | -         |    -1.20 | emothug, Halen, Pose1doNN, sasha, Zucar |
|            9 |     2859 | 2024-08-14 | Nouns         | L   | 0.516      | -            | -                | -                | -         |    -0.89 | emothug, Halen, Pose1doNN, sasha, Zucar |
|            8 |     2963 | 2024-08-11 | NoVum         | W   | 0.496      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.36 | Halen, Pose1doNN, rayxts, sasha, Zucar  |
|            7 |     2983 | 2024-08-10 | Akimbo        | L   | 0.491      | -            | -                | -                | -         |    -3.37 | Halen, Pose1doNN, rayxts, sasha, Zucar  |
|            6 |     3125 | 2024-08-06 | Canada        | W   | 0.463      | 0.371        | 0.003 (0.000)    | 0.101 (0.017)    | 0 (0.000) |    10.79 | Halen, Pose1doNN, rayxts, sasha, Zucar  |
|            5 |     3212 | 2024-08-03 | USA           | L   | 0.444      | -            | -                | -                | -         |    -7.17 | Halen, Pose1doNN, rayxts, sasha, Zucar  |
|            4 |     3543 | 2024-07-25 | LAG           | W   | 0.383      | 0.371        | 0.004 (0.001)    | 0.198 (0.028)    | 0 (0.000) |     9.75 | Halen, Pose1doNN, rayxts, sasha, Zucar  |
|            3 |     4284 | 2024-06-13 | Canada        | L   | 0.104      | -            | -                | -                | -         |    -0.84 | arcade, dvrk, rayxts, sasha, Zucar      |
|            2 |     4314 | 2024-06-12 | Limitless     | W   | 0.097      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.12 | arcade, dvrk, rayxts, sasha, Zucar      |
|            1 |     4317 | 2024-06-12 | Canada        | L   | 0.096      | -            | -                | -                | -         |    -0.78 | arcade, dvrk, rayxts, sasha, Zucar      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
