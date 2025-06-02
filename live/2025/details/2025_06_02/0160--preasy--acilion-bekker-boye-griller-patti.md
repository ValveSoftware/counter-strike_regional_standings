### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, bekker, Boye, Griller, Patti<br />
Global Rank: [160](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  659.5<br />
<br />
Final Rank Value (659.5) = Starting Rank Value (655.7) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.7
- 400 + ( ( 0.139 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 655.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      700 | 2025-04-27 | HEROIC Academy | L   | 0.963      | -            | -                | -                | -         |   -13.86 | AcilioN, bekker, Boye, Griller, Patti  |
|            7 |      718 | 2025-04-26 | Kronjyllands   | W   | 0.959      | 0.321        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.959) |     5.12 | AcilioN, bekker, Boye, Griller, Patti  |
|            6 |     1908 | 2025-03-17 | ECSTATIC       | L   | 0.691      | -            | -                | -                | -         |    -1.71 | AcilioN, Beccie, Griller, Patti, Viggo |
|            5 |     2617 | 2025-02-23 | ARCRED         | L   | 0.546      | -            | -                | -                | -         |    -3.10 | AcilioN, Beccie, Griller, Patti, Viggo |
|            4 |     2622 | 2025-02-23 | Garden Garage  | W   | 0.545      | 0.143        | 0.003 (0.000)    | 0.132 (0.010)    | 0 (0.000) |     7.85 | AcilioN, Beccie, Griller, Patti, Viggo |
|            3 |     2630 | 2025-02-23 | AMKAL          | W   | 0.544      | 0.143        | 0.002 (0.000)    | 0.469 (0.036)    | 0 (0.000) |     9.14 | AcilioN, Beccie, Griller, Patti, Viggo |
|            2 |     2844 | 2025-02-15 | RUBY           | L   | 0.491      | -            | -                | -                | -         |    -4.05 | AcilioN, Beccie, Griller, Patti, Viggo |
|            1 |     3520 | 2025-01-07 | CPH Wolves     | W   | 0.232      | 0.278        | 0.008 (0.001)    | 0.393 (0.025)    | 0 (0.000) |     4.46 | AcilioN, Beccie, Griller, Patti, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($464.36)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-07 |      0.232 | $2,000.00      | $464.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
