### Roster Details<br />
Team Name: Julie&Cie<br />
Roster: amanek, Empera, KIRADODO, Monkey D Julie, Razzmo<br />
Global Rank: [167](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [114]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  833.1<br />
<br />
Final Rank Value (833.1) = Starting Rank Value (819.0) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.0
- 400 + ( ( 0.214 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 819.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |        2 | 2026-04-05 | aAa              | L   | 1.000      | -            | -                | -                | -         |    -9.61 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            4 |       14 | 2026-04-05 | Subtop De France | W   | 1.000      | 0.362        | 0.006 (0.002)    | 0.092 (0.033)    | 1 (1.000) |    15.01 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            3 |       22 | 2026-04-05 | aAa              | L   | 1.000      | -            | -                | -                | -         |    -9.78 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            2 |       36 | 2026-04-04 | VCGO             | W   | 1.000      | 0.362        | 0.002 (0.001)    | 0.031 (0.011)    | 1 (1.000) |     9.23 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |
|            1 |       49 | 2026-04-04 | MyHUD            | W   | 1.000      | 0.362        | 0.002 (0.001)    | 0.031 (0.011)    | 1 (1.000) |     9.22 | amanek, Empera, KIRADODO, Monkey D Julie, Razzmo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,057.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $4,057.00      | $4,057.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
