### Roster Details<br />
Team Name: GenOne<br />
Roster: Brooxsy, devoduvek, drac, JACKZ, KRL<br />
Global Rank: [209](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [127]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  548.5<br />
<br />
Final Rank Value (548.5) = Starting Rank Value (508.4) + Head To Head Adjustments (40.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 508.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      746 | 2024-09-21 | HOTU             | L   | 1.000      | -            | -                | -                | -         |    -5.46 | Brooxsy, devoduvek, drac, JACKZ, KRL      |
|           13 |      779 | 2024-09-20 | Nexus            | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.463 (0.066)    | 0 (0.000) |    23.96 | Brooxsy, devoduvek, drac, JACKZ, Kursy    |
|           12 |      815 | 2024-09-19 | HOTU             | L   | 1.000      | -            | -                | -                | -         |    -4.55 | Brooxsy, devoduvek, drac, JACKZ, Kursy    |
|           11 |     1391 | 2024-08-29 | Aurora           | L   | 0.888      | -            | -                | -                | -         |    -0.92 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|           10 |     1405 | 2024-08-29 | SAW              | L   | 0.887      | -            | -                | -                | -         |    -0.15 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            9 |     1826 | 2024-08-20 | Illuminar        | L   | 0.826      | -            | -                | -                | -         |    -4.85 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            8 |     1840 | 2024-08-19 | Young Ninjas     | L   | 0.821      | -            | -                | -                | -         |    -3.85 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            7 |     1895 | 2024-08-17 | B8               | L   | 0.808      | -            | -                | -                | -         |    -1.31 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            6 |     1903 | 2024-08-17 | 500              | W   | 0.807      | 0.143        | 0.004 (0.000)    | 0.293 (0.034)    | 0 (0.000) |    19.83 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            5 |     2766 | 2024-07-22 | Astralis Talent  | L   | 0.634      | -            | -                | -                | -         |    -6.84 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            4 |     2824 | 2024-07-20 | FLuffy Gangsters | W   | 0.621      | 0.143        | 0.004 (0.000)    | 0.322 (0.029)    | 0 (0.000) |    15.40 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            3 |     2872 | 2024-07-19 | Grannys Knockers | W   | 0.613      | 0.143        | 0.001 (0.000)    | 0.078 (0.007)    | 0 (0.000) |    14.20 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            2 |     4250 | 2024-05-19 | Over30           | L   | 0.206      | -            | -                | -                | -         |    -3.13 | Brooxsy, devoduvek, drac, Kursy, unshaark |
|            1 |     4257 | 2024-05-19 | 11 minutos tarde | L   | 0.205      | -            | -                | -                | -         |    -2.22 | Brooxsy, devoduvek, drac, Kursy, unshaark |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
