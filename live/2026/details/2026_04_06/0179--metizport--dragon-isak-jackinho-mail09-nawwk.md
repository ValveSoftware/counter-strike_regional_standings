### Roster Details<br />
Team Name: Metizport<br />
Roster: Dragon, isak, Jackinho, MaiL09, nawwk<br />
Global Rank: [179](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [124]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  788.6<br />
<br />
Final Rank Value (788.6) = Starting Rank Value (753.6) + Head To Head Adjustments (35.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.6
- 400 + ( ( 0.181 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 753.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     4542 | 2025-11-15 | Alliance       | L   | 0.254      | -            | -                | -                | -         |    -0.14 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           14 |     4564 | 2025-11-14 | Johnny Speeds  | W   | 0.248      | 0.400        | 0.067 (0.007)    | 0.794 (0.079)    | 1 (0.248) |     7.52 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           13 |     4595 | 2025-11-13 | megoshort      | W   | 0.240      | 0.400        | 0.004 (0.000)    | 0.335 (0.032)    | 1 (0.240) |     5.93 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           12 |     4621 | 2025-11-12 | Alliance       | L   | 0.234      | -            | -                | -                | -         |    -0.12 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           11 |     4634 | 2025-11-12 | megoshort      | W   | 0.232      | 0.400        | 0.004 (0.000)    | 0.335 (0.031)    | 1 (0.232) |     5.79 | Dragon, isak, Jackinho, MaiL09, nawwk |
|           10 |     4781 | 2025-11-08 | BetBoom        | L   | 0.205      | -            | -                | -                | -         |    -0.11 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            9 |     4793 | 2025-11-07 | MASONIC        | W   | 0.202      | 0.335        | 0.002 (0.000)    | 0.519 (0.035)    | 1 (0.202) |     5.71 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            8 |     4806 | 2025-11-07 | Minkens finest | W   | 0.200      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.200) |     0.72 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            7 |     4817 | 2025-11-07 | Inner Circle   | L   | 0.200      | -            | -                | -                | -         |    -0.55 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            6 |     4832 | 2025-11-07 | Acend          | W   | 0.200      | 0.335        | 0.035 (0.002)    | 0.771 (0.052)    | 1 (0.200) |     6.03 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            5 |     4849 | 2025-11-07 | Johnny Speeds  | L   | 0.200      | -            | -                | -                | -         |    -0.20 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            4 |     4875 | 2025-11-07 | Young Ninjas   | W   | 0.199      | 0.335        | 0.000 (0.000)    | 0.017 (0.001)    | 1 (0.199) |     1.39 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            3 |     5065 | 2025-10-31 | JiJieHao       | L   | 0.154      | -            | -                | -                | -         |    -0.44 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            2 |     5107 | 2025-10-29 | Nexus          | W   | 0.140      | 0.435        | 0.001 (0.000)    | 0.449 (0.027)    | 0 (0.000) |     3.85 | Dragon, isak, Jackinho, MaiL09, nawwk |
|            1 |     5140 | 2025-10-28 | JiJieHao       | L   | 0.134      | -            | -                | -                | -         |    -0.38 | Dragon, isak, Jackinho, MaiL09, nawwk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,887.12)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.254 | $7,417.00      | $1,887.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
