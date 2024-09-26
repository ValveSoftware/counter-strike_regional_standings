### Roster Details<br />
Team Name: TSM Impact<br />
Roster: abby, empathy, Florence, Lx, madss<br />
Global Rank: [185](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_26.md)<br />
Regional Rank: [52]( ../../standings_americas_2024_09_26.md)<br />
<br />
Final Rank Value:  613.1<br />
<br />
Final Rank Value (613.1) = Starting Rank Value (640.8) + Head To Head Adjustments (-27.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.8
- 400 + ( ( 0.127 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 640.8


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
|           15 |     2971 | 2024-06-09 | Perseverance     | L   | 0.474      | -            | -                | -                | -         |    -9.91 | abby, empathy, Florence, Lx, madss |
|           14 |     3071 | 2024-06-07 | Zomblers         | L   | 0.463      | -            | -                | -                | -         |   -10.01 | abby, empathy, Florence, Lx, madss |
|           13 |     3218 | 2024-06-05 | Asian Kings      | W   | 0.447      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.98 | abby, empathy, Florence, Lx, madss |
|           12 |     3261 | 2024-06-04 | Nouns            | L   | 0.442      | -            | -                | -                | -         |    -1.17 | abby, empathy, Florence, Lx, madss |
|           11 |     3265 | 2024-06-04 | Homyno           | L   | 0.441      | -            | -                | -                | -         |    -6.66 | abby, empathy, Florence, Lx, madss |
|           10 |     3370 | 2024-05-31 | NAVI Javelins    | L   | 0.416      | -            | -                | -                | -         |    -4.34 | abby, empathy, Lx, madss, phoebe   |
|            9 |     3377 | 2024-05-31 | Fluxo Demons     | L   | 0.414      | -            | -                | -                | -         |    -4.70 | abby, empathy, Lx, madss, phoebe   |
|            8 |     3490 | 2024-05-26 | FlyQuest RED     | L   | 0.382      | -            | -                | -                | -         |    -5.39 | abby, empathy, Lx, madss, phoebe   |
|            7 |     3492 | 2024-05-26 | Blue Otter Karma | W   | 0.381      | 0.303        | 0.001 (0.000)    | 0.085 (0.010)    | 0 (0.000) |     5.29 | abby, empathy, Lx, madss, phoebe   |
|            6 |     4090 | 2024-05-05 | Arf Squad fe     | W   | 0.242      | 0.250        | 0.004 (0.000)    | 0.062 (0.004)    | 0 (0.000) |     3.86 | abby, empathy, Lx, madss, phoebe   |
|            5 |     4444 | 2024-04-19 | Limitless Angels | W   | 0.136      | 0.322        | 0.001 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.83 | abby, empathy, Lx, madss, phoebe   |
|            4 |     4622 | 2024-04-14 | FlyQuest RED     | L   | 0.102      | -            | -                | -                | -         |    -1.45 | abby, empathy, Lx, madss, phoebe   |
|            3 |     4671 | 2024-04-11 | COVEN            | W   | 0.082      | 0.322        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.83 | abby, empathy, Lx, madss, phoebe   |
|            2 |     4836 | 2024-04-07 | Limitless Angels | W   | 0.055      | 0.250        | 0.001 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.74 | abby, empathy, Lx, madss, phoebe   |
|            1 |     4935 | 2024-04-03 | WG Bandits       | W   | 0.029      | 0.322        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.38 | abby, empathy, Lx, madss, phoebe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,533.59)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.428 | $4,000.00      | $1,712.74       |
| 2024-05-26 |      0.382 | $1,500.00      | $572.25         |
| 2024-05-05 |      0.242 | $750.00        | $181.53         |
| 2024-04-14 |      0.102 | $250.00        | $25.51          |
| 2024-04-07 |      0.055 | $750.00        | $41.55          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
