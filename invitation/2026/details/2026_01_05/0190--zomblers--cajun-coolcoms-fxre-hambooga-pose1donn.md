### Roster Details<br />
Team Name: Zomblers<br />
Roster: CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN<br />
Global Rank: [190](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [42]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  683.1<br />
<br />
Final Rank Value (683.1) = Starting Rank Value (682.9) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.9
- 400 + ( ( 0.143 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 682.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      853 | 2025-11-15 | Marsborne       | L   | 0.862      | -            | -                | -                | -         |    -1.63 | CAJUN, CoolComs, grape, Pol0, Pose1doNN    |
|           33 |      988 | 2025-11-10 | Mythic          | L   | 0.830      | -            | -                | -                | -         |   -12.40 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           32 |     1476 | 2025-10-27 | InControl       | W   | 0.736      | 0.363        | 0.001 (0.000)    | 0.200 (0.053)    | 0 (0.000) |    11.11 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           31 |     1516 | 2025-10-26 | FlyQuest RED    | W   | 0.730      | 0.363        | 0.018 (0.005)    | 0.272 (0.072)    | 0 (0.000) |    14.24 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           30 |     1574 | 2025-10-25 | Nocturnal       | W   | 0.723      | 0.363        | 0.003 (0.001)    | 0.128 (0.034)    | 0 (0.000) |     9.99 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           29 |     1635 | 2025-10-24 | regain          | L   | 0.715      | -            | -                | -                | -         |    -8.74 | CAJUN, CoolComs, grape, Pol0, Pose1doNN    |
|           28 |     1690 | 2025-10-23 | OverKnight      | L   | 0.709      | -            | -                | -                | -         |   -10.53 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           27 |     1737 | 2025-10-22 | anything else   | W   | 0.703      | -            | -                | -                | 0 (0.000) |     5.66 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           26 |     1851 | 2025-10-16 | Outfit 49       | L   | 0.663      | -            | -                | -                | -         |   -12.91 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           25 |     1957 | 2025-10-13 | Phoenix         | L   | 0.643      | -            | -                | -                | -         |    -8.88 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           24 |     2097 | 2025-10-08 | BOSS            | L   | 0.609      | -            | -                | -                | -         |    -7.91 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           23 |     2154 | 2025-10-07 | Nocturnal       | W   | 0.603      | 0.363        | 0.003 (0.001)    | 0.128 (0.028)    | 0 (0.000) |     8.57 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           22 |     2160 | 2025-10-07 | Phoenix         | L   | 0.602      | -            | -                | -                | -         |    -8.72 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           21 |     2210 | 2025-10-06 | Voca            | L   | 0.596      | -            | -                | -                | -         |    -4.02 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           20 |     2222 | 2025-10-06 | Wildcard        | W   | 0.595      | 0.333        | 0.022 (0.004)    | 0.376 (0.075)    | 0 (0.000) |    15.42 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           19 |     2276 | 2025-10-05 | Green Tea Party | W   | 0.589      | -            | -                | -                | 0 (0.000) |     3.02 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           18 |     2336 | 2025-10-04 | FlyQuest RED    | W   | 0.582      | 0.333        | 0.018 (0.003)    | 0.272 (0.053)    | 0 (0.000) |    11.86 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           17 |     2379 | 2025-10-03 | Arrival Seven   | W   | 0.575      | -            | -                | -                | 0 (0.000) |     4.91 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           16 |     2484 | 2025-09-30 | InControl       | L   | 0.555      | -            | -                | -                | -         |    -8.54 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           15 |     3666 | 2025-08-24 | regain          | L   | 0.309      | -            | -                | -                | -         |    -4.29 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           14 |     3695 | 2025-08-22 | FlyQuest RED    | W   | 0.296      | 0.333        | 0.018 (0.002)    | 0.272 (0.027)    | 0 (0.000) |     6.18 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           13 |     3707 | 2025-08-21 | BOSS            | L   | 0.290      | -            | -                | -                | -         |    -3.35 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           12 |     3767 | 2025-08-19 | Aether          | W   | 0.276      | -            | -                | -                | -         |     2.46 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           11 |     3828 | 2025-08-16 | Marsborne       | L   | 0.256      | -            | -                | -                | -         |    -0.47 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|           10 |     3918 | 2025-08-14 | regain          | L   | 0.243      | -            | -                | -                | -         |    -3.48 | CAJUN, CoolComs, Drop, Pose1doNN, stamina  |
|            9 |     3970 | 2025-08-13 | Ghost           | W   | 0.236      | 0.363        | 0.003 (0.000)    | 0.171 (0.015)    | -         |     3.45 | CAJUN, CoolComs, Drop, Pose1doNN, stamina  |
|            8 |     4022 | 2025-08-12 | BOSS            | L   | 0.229      | -            | -                | -                | -         |    -2.68 | CAJUN, CoolComs, Drop, Pose1doNN, stamina  |
|            7 |     4071 | 2025-08-11 | Mythic          | W   | 0.223      | 0.363        | 0.002 (0.000)    | 0.208 (0.017)    | -         |     3.56 | CAJUN, CoolComs, Drop, Pose1doNN, stamina  |
|            6 |     4084 | 2025-08-11 | Phoenix         | L   | 0.221      | -            | -                | -                | -         |    -3.14 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|            5 |     4121 | 2025-08-10 | Sakura          | W   | 0.216      | 0.333        | 0.059 (0.004)    | 0.277 (0.020)    | -         |     5.42 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|            4 |     4174 | 2025-08-08 | SkinRave        | L   | 0.202      | -            | -                | -                | -         |    -1.51 | CAJUN, CoolComs, FxRE, HAMBOOGA, Pose1doNN |
|            3 |     4512 | 2025-07-18 | Zomblers        | L   | 0.063      | -            | -                | -                | -         |    -1.51 | CAJUN, CoolComs, Drop, Pose1doNN, stamina  |
|            2 |     4515 | 2025-07-18 | Phoenix         | L   | 0.063      | -            | -                | -                | -         |    -0.90 | CAJUN, CoolComs, Drop, Pose1doNN, stamina  |
|            1 |     4684 | 2025-07-11 | Marsborne       | L   | 0.016      | -            | -                | -                | -         |    -0.03 | CAJUN, CoolComs, Drop, Pose1doNN, stamina  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($608.93)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-08 |      0.609 | $1,000.00      | $608.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
