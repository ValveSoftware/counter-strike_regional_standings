### Roster Details<br />
Team Name: TSM Shimmer<br />
Roster: abby, empathy, Juli, Lx, madss<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
Final Rank Value:  687.5<br />
<br />
Final Rank Value (687.5) = Starting Rank Value (729.2) + Head To Head Adjustments (-41.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.2
- 400 + ( ( 0.162 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 729.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |        8 | 2024-06-16 | Lotus fe         | W   | 1.000      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.02 | abby, empathy, Juli, Lx, madss              |
|           25 |      237 | 2024-06-09 | Perseverance     | L   | 1.000      | -            | -                | -                | -         |   -22.05 | abby, empathy, Florence, Lx, madss          |
|           24 |      337 | 2024-06-07 | Zomblers         | L   | 1.000      | -            | -                | -                | -         |   -23.36 | abby, empathy, Florence, Lx, madss          |
|           23 |      484 | 2024-06-05 | Asian Kings      | W   | 1.000      | 0.384        | -                | 0.000 (0.000)    | 0 (0.000) |     4.27 | abby, empathy, Florence, Lx, madss          |
|           22 |      527 | 2024-06-04 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -4.38 | abby, empathy, Florence, Lx, madss          |
|           21 |      531 | 2024-06-04 | Strife           | L   | 1.000      | -            | -                | -                | -         |   -15.66 | abby, empathy, Florence, Lx, madss          |
|           20 |      638 | 2024-05-31 | NAVI Javelins    | L   | 1.000      | -            | -                | -                | -         |    -7.96 | abby, empathy, Lx, madss, phoebe            |
|           19 |      645 | 2024-05-31 | Fluxo Demons     | L   | 1.000      | -            | -                | -                | -         |    -8.63 | abby, empathy, Lx, madss, phoebe            |
|           18 |      758 | 2024-05-26 | FlyQuest RED     | L   | 1.000      | -            | -                | -                | -         |   -12.28 | abby, empathy, Lx, madss, phoebe            |
|           17 |      760 | 2024-05-26 | Karma            | W   | 1.000      | 0.303        | 0.006 (0.002)    | 0.121 (0.037)    | 0 (0.000) |    13.02 | abby, empathy, Lx, madss, phoebe            |
|           16 |     1358 | 2024-05-05 | Limitless Angels | W   | 0.911      | 0.250        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.63 | Bungee, Celia, erin, Fawx, mira             |
|           15 |     1712 | 2024-04-19 | Limitless Angels | W   | 0.804      | 0.322        | 0.005 (0.001)    | 0.088 (0.023)    | 0 (0.000) |    10.01 | abby, empathy, Lx, madss, phoebe            |
|           14 |     1890 | 2024-04-14 | FlyQuest RED     | L   | 0.771      | -            | -                | -                | -         |    -9.67 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|           13 |     1939 | 2024-04-11 | COVEN            | W   | 0.751      | 0.322        | 0.003 (0.001)    | -                | 0 (0.000) |     4.97 | abby, empathy, Lx, madss, phoebe            |
|           12 |     2104 | 2024-04-07 | Limitless Angels | W   | 0.724      | 0.250        | 0.005 (0.001)    | 0.088 (0.016)    | 0 (0.000) |     9.11 | daria, Fawx, mira, PiggyKiki, rbn           |
|           11 |     2203 | 2024-04-03 | WG Bandits       | W   | 0.697      | 0.322        | 0.003 (0.001)    | 0.042 (0.009)    | 0 (0.000) |     7.63 | abby, empathy, Lx, madss, phoebe            |
|           10 |     2334 | 2024-03-27 | cleanup crew fe  | W   | 0.651      | 0.322        | 0.003 (0.001)    | 0.042 (0.009)    | 0 (0.000) |     8.16 | ARIANARCHIST, Bubzy, gadfly, paula, Shelby  |
|            9 |     2431 | 2024-03-21 | Karma            | W   | 0.611      | 0.322        | 0.006 (0.001)    | 0.121 (0.024)    | 0 (0.000) |     8.54 | artStar, Ellie, EMUHLEET, olya, rain        |
|            8 |     2571 | 2024-03-14 | Nouns fe         | W   | 0.565      | 0.322        | 0.003 (0.001)    | 0.065 (0.012)    | -         |     7.91 | ashe, jesscas, katalyyst, lunari, Rice      |
|            7 |     2780 | 2024-03-06 | FlyQuest RED     | L   | 0.512      | -            | -                | -                | -         |    -6.40 | abby, empathy, Lx, madss, phoebe            |
|            6 |     2868 | 2024-03-03 | FlyQuest RED     | L   | 0.491      | -            | -                | -                | -         |    -6.40 | abby, empathy, Lx, madss, phoebe            |
|            5 |     3010 | 2024-02-25 | FlyQuest RED     | L   | 0.444      | -            | -                | -                | -         |    -6.03 | abby, empathy, Lx, madss, phoebe            |
|            4 |     3425 | 2024-02-04 | FlyQuest RED     | L   | 0.304      | -            | -                | -                | -         |    -4.26 | abby, empathy, Lx, madss, phoebe            |
|            3 |     3580 | 2024-01-28 | FlyQuest RED     | L   | 0.257      | -            | -                | -                | -         |    -3.70 | abby, empathy, Lx, madss, phoebe            |
|            2 |     3717 | 2024-01-21 | NA savers        | W   | 0.211      | -            | -                | -                | -         |     1.49 | abby, empathy, Lx, phoebe, raynee           |
|            1 |     4006 | 2024-01-15 | NRG              | L   | 0.171      | -            | -                | -                | -         |    -1.63 | abby, chigen, empathy, Lx, phoebe           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,136.67)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $750.00        | $750.00         |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-26 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-05-05 |      0.911 | $750.00        | $683.05         |
| 2024-04-14 |      0.771 | $250.00        | $192.69         |
| 2024-04-07 |      0.724 | $750.00        | $543.07         |
| 2024-03-03 |      0.491 | $250.00        | $122.70         |
| 2024-02-25 |      0.444 | $250.00        | $111.03         |
| 2024-02-04 |      0.304 | $250.00        | $76.04          |
| 2024-01-21 |      0.211 | $750.00        | $158.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
