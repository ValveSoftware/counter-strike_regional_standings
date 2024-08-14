### Roster Details<br />
Team Name: TSM Shimmer<br />
Roster: empathy, Juli, Lx, madss, phoebe<br />
Global Rank: [163](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [46]( ../standings_americas.md)<br />
<br />
Final Rank Value:  678.8<br />
<br />
Final Rank Value (678.8) = Starting Rank Value (695.6) + Head To Head Adjustments (-16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.6
- 400 + ( ( 0.150 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 695.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      590 | 2024-07-28 | Nouns fe         | W   | 1.000      | 0.250        | 0.003 (0.001)    | 0.026 (0.007)    | 0 (0.000) |    12.71 | empathy, Juli, Lx, madss, phoebe   |
|           22 |     1319 | 2024-06-16 | Lotus fe         | W   | 0.808      | 0.250        | 0.004 (0.001)    | 0.035 (0.007)    | 0 (0.000) |    11.45 | abby, empathy, Juli, Lx, madss     |
|           21 |     1548 | 2024-06-09 | Perseverance     | L   | 0.760      | -            | -                | -                | -         |   -16.55 | abby, empathy, Florence, Lx, madss |
|           20 |     1648 | 2024-06-07 | Zomblers         | L   | 0.749      | -            | -                | -                | -         |   -17.09 | abby, empathy, Florence, Lx, madss |
|           19 |     1795 | 2024-06-05 | Asian Kings      | W   | 0.733      | -            | -                | -                | 0 (0.000) |     3.75 | abby, empathy, Florence, Lx, madss |
|           18 |     1838 | 2024-06-04 | Nouns            | L   | 0.727      | -            | -                | -                | -         |    -4.26 | abby, empathy, Florence, Lx, madss |
|           17 |     1842 | 2024-06-04 | Homyno           | L   | 0.726      | -            | -                | -                | -         |   -11.64 | abby, empathy, Florence, Lx, madss |
|           16 |     1947 | 2024-05-31 | NAVI Javelins    | L   | 0.701      | -            | -                | -                | -         |    -7.38 | abby, empathy, Lx, madss, phoebe   |
|           15 |     1954 | 2024-05-31 | panelinha        | L   | 0.700      | -            | -                | -                | -         |    -7.57 | abby, empathy, Lx, madss, phoebe   |
|           14 |     2067 | 2024-05-26 | FlyQuest RED     | L   | 0.667      | -            | -                | -                | -         |    -9.90 | abby, empathy, Lx, madss, phoebe   |
|           13 |     2069 | 2024-05-26 | Karma            | W   | 0.666      | 0.303        | 0.003 (0.001)    | 0.058 (0.012)    | 0 (0.000) |     8.57 | abby, empathy, Lx, madss, phoebe   |
|           12 |     2667 | 2024-05-05 | Lotus fe         | W   | 0.528      | 0.250        | 0.004 (0.001)    | 0.035 (0.005)    | 0 (0.000) |     6.67 | abby, empathy, Lx, madss, phoebe   |
|           11 |     3021 | 2024-04-19 | Limitless Angels | W   | 0.421      | 0.322        | 0.002 (0.000)    | 0.037 (0.005)    | 0 (0.000) |     5.27 | abby, empathy, Lx, madss, phoebe   |
|           10 |     3199 | 2024-04-14 | FlyQuest RED     | L   | 0.388      | -            | -                | -                | -         |    -5.89 | abby, empathy, Lx, madss, phoebe   |
|            9 |     3248 | 2024-04-11 | COVEN            | W   | 0.368      | 0.322        | 0.001 (0.000)    | -                | 0 (0.000) |     2.93 | abby, empathy, Lx, madss, phoebe   |
|            8 |     3413 | 2024-04-07 | Limitless Angels | W   | 0.341      | 0.250        | 0.002 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     4.27 | abby, empathy, Lx, madss, phoebe   |
|            7 |     3512 | 2024-04-03 | WG Bandits       | W   | 0.314      | 0.322        | 0.001 (0.000)    | 0.016 (0.002)    | 0 (0.000) |     3.63 | abby, empathy, Lx, madss, phoebe   |
|            6 |     3642 | 2024-03-27 | cleanup crew fe  | W   | 0.268      | 0.322        | -                | 0.015 (0.001)    | 0 (0.000) |     3.31 | abby, empathy, Lx, madss, phoebe   |
|            5 |     3739 | 2024-03-21 | Karma            | W   | 0.228      | 0.322        | 0.003 (0.000)    | 0.058 (0.004)    | -         |     3.05 | abby, empathy, Lx, madss, phoebe   |
|            4 |     3879 | 2024-03-14 | Nouns fe         | W   | 0.182      | 0.322        | 0.003 (0.000)    | 0.026 (0.002)    | -         |     2.40 | abby, empathy, Lx, madss, phoebe   |
|            3 |     4088 | 2024-03-06 | FlyQuest RED     | L   | 0.129      | -            | -                | -                | -         |    -1.97 | abby, empathy, Lx, madss, phoebe   |
|            2 |     4176 | 2024-03-03 | FlyQuest RED     | L   | 0.108      | -            | -                | -                | -         |    -1.66 | abby, empathy, Lx, madss, phoebe   |
|            1 |     4318 | 2024-02-25 | FlyQuest RED     | L   | 0.061      | -            | -                | -                | -         |    -0.95 | abby, empathy, Lx, madss, phoebe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,002.82)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $750.00        | $750.00         |
| 2024-06-16 |      0.808 | $750.00        | $606.04         |
| 2024-06-02 |      0.714 | $4,000.00      | $2,855.35       |
| 2024-05-26 |      0.667 | $1,500.00      | $1,000.73       |
| 2024-05-05 |      0.528 | $750.00        | $395.77         |
| 2024-04-14 |      0.388 | $250.00        | $96.93          |
| 2024-04-07 |      0.341 | $750.00        | $255.79         |
| 2024-03-03 |      0.108 | $250.00        | $26.94          |
| 2024-02-25 |      0.061 | $250.00        | $15.27          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
