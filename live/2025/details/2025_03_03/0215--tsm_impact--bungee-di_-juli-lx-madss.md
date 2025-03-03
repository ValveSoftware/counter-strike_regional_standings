### Roster Details<br />
Team Name: TSM Impact<br />
Roster: Bungee, di^, Juli, Lx, madss<br />
Global Rank: [215](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  612.1<br />
<br />
Final Rank Value (612.1) = Starting Rank Value (609.6) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 609.6
- 400 + ( ( 0.109 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 609.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2092 | 2024-10-18 | FLUFFY MAFIA     | W   | 0.296      | 0.333        | 0.002 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     4.86 | Bungee, di^, Juli, Lx, madss     |
|            5 |     2519 | 2024-10-02 | Supernova Comets | L   | 0.189      | -            | -                | -                | -         |    -2.10 | Bungee, di^, Juli, Lx, madss     |
|            4 |     2752 | 2024-09-26 | Aware fe         | L   | 0.149      | -            | -                | -                | -         |    -2.46 | Bungee, di^, Juli, Lx, madss     |
|            3 |     3059 | 2024-09-18 | Nouns fe         | W   | 0.095      | 0.333        | 0.001 (0.000)    | 0.089 (0.003)    | 0 (0.000) |     1.49 | Bungee, di^, Juli, Lx, madss     |
|            2 |     3274 | 2024-09-11 | Blue Otter Karma | W   | 0.049      | 0.333        | 0.001 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.74 | empathy, Juli, Lx, madss, phoebe |
|            1 |     3480 | 2024-09-04 | FlyQuest RED     | L   | 0.002      | -            | -                | -                | -         |    -0.03 | empathy, Juli, Lx, madss, phoebe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($428.93)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.296 | $1,450.00      | $428.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
