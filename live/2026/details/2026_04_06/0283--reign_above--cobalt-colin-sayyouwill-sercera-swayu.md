### Roster Details<br />
Team Name: Reign Above<br />
Roster: cobalt, colin, SayYouWill, SeRCEra, swayu<br />
Global Rank: [283](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [73]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  596.0<br />
<br />
Final Rank Value (596.0) = Starting Rank Value (572.3) + Head To Head Adjustments (23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.3
- 400 + ( ( 0.088 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 572.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      658 | 2026-03-23 | Outfit 49 | L   | 1.000      | -            | -                | -                | -         |   -10.39 | cobalt, dAVE, louie, SayYouWill, SeRCEra  |
|           11 |      731 | 2026-03-22 | Sakura    | W   | 1.000      | 0.363        | 0.021 (0.008)    | 0.054 (0.020)    | 0 (0.000) |    17.61 | cobalt, dAVE, louie, SeRCEra, swayu       |
|           10 |      769 | 2026-03-21 | NuTorious | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.067 (0.024)    | 0 (0.000) |    11.79 | cobalt, dAVE, louie, SeRCEra, swayu       |
|            9 |      835 | 2026-03-20 | Aether    | L   | 1.000      | -            | -                | -                | -         |    -8.61 | cobalt, dAVE, louie, SeRCEra, swayu       |
|            8 |     2958 | 2026-02-02 | LAG       | L   | 0.783      | -            | -                | -                | -         |    -3.21 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            7 |     3737 | 2026-01-03 | Marsborne | L   | 0.582      | -            | -                | -                | -         |    -0.43 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            6 |     3742 | 2026-01-03 | EMPIRE    | W   | 0.581      | 0.323        | 0.004 (0.001)    | 0.122 (0.023)    | 1 (0.581) |    12.08 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            5 |     3750 | 2026-01-03 | Marsborne | L   | 0.580      | -            | -                | -                | -         |    -0.39 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            4 |     4713 | 2025-11-09 | M80       | L   | 0.213      | -            | -                | -                | -         |    -0.05 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            3 |     4727 | 2025-11-08 | Memeories | W   | 0.210      | 0.333        | 0.000 (0.000)    | 0.037 (0.003)    | 1 (0.210) |     2.70 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            2 |     4732 | 2025-11-08 | NRG       | L   | 0.209      | -            | -                | -                | -         |    -0.10 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            1 |     4739 | 2025-11-08 | Memeories | W   | 0.208      | 0.333        | 0.000 (0.000)    | 0.037 (0.003)    | 1 (0.208) |     2.70 | cobalt, colin, SayYouWill, SeRCEra, swayu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
