### Roster Details<br />
Team Name: Permitta W<br />
Roster: Monkey D Julie, oxycet, Tynka, Victoria, wieenN<br />
Global Rank: [201](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [124]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  625.5<br />
<br />
Final Rank Value (625.5) = Starting Rank Value (621.3) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.3
- 400 + ( ( 0.115 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 621.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      885 | 2024-12-15 | nomercy fe         | W   | 0.680      | 0.250        | 0.001 (0.000)    | 0.069 (0.012)    | 0 (0.000) |    10.21 | Monkey D Julie, oxycet, Tynka, Victoria, wieenN |
|            4 |     2104 | 2024-10-18 | K27 fe             | L   | 0.294      | -            | -                | -                | -         |    -4.10 | Missy, Monkey D Julie, oxycet, Tynka, Victoria  |
|            3 |     2541 | 2024-10-02 | Imperial Valkyries | L   | 0.187      | -            | -                | -                | -         |    -0.63 | Glymir, Monkey D Julie, oxycet, Tynka, Victoria |
|            2 |     2830 | 2024-09-25 | BIG EQUIPA         | L   | 0.140      | -            | -                | -                | -         |    -1.41 | Missy, Monkey D Julie, oxycet, Tynka, Victoria  |
|            1 |     3449 | 2024-09-05 | nomercy fe         | W   | 0.007      | 0.328        | 0.001 (0.000)    | 0.069 (0.000)    | 0 (0.000) |     0.11 | Missy, Monkey D Julie, oxycet, Tynka, Victoria  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($878.64)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.680 | $750.00        | $510.04         |
| 2024-10-20 |      0.307 | $1,200.00      | $368.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
