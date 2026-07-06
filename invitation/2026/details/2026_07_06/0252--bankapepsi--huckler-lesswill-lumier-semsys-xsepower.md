### Roster Details<br />
Team Name: bankaPEPSI<br />
Roster: HUckLer, lesswill, lUMiER, SEMSYS, xsepower<br />
Global Rank: [252](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [164]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  659.3<br />
<br />
Final Rank Value (659.3) = Starting Rank Value (637.9) + Head To Head Adjustments (21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.9
- 400 + ( ( 0.126 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 637.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      489 | 2026-06-06 | OLDBOYS PL           | L   | 1.000      | -            | -                | -                | -         |   -12.99 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|           11 |     1973 | 2026-04-25 | BET-M                | L   | 0.720      | -            | -                | -                | -         |    -2.04 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|           10 |     2033 | 2026-04-24 | megoshort            | W   | 0.711      | 0.384        | 0.000 (0.000)    | 0.020 (0.005)    | 0 (0.000) |     6.13 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            9 |     2041 | 2026-04-23 | GenOne               | L   | 0.708      | -            | -                | -                | -         |    -6.34 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            8 |     2077 | 2026-04-22 | Famalicão            | W   | 0.701      | 0.384        | 0.001 (0.000)    | 0.206 (0.056)    | 0 (0.000) |    11.89 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            7 |     2315 | 2026-04-10 | ZOTIX                | L   | 0.621      | -            | -                | -                | -         |   -11.61 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            6 |     3034 | 2026-03-29 | benched gods         | W   | 0.542      | 0.278        | 0.001 (0.000)    | 0.126 (0.019)    | 0 (0.000) |     8.43 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            5 |     3054 | 2026-03-29 | Fire Flux            | W   | 0.541      | 0.278        | 0.014 (0.002)    | 0.217 (0.033)    | 0 (0.000) |     8.93 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            4 |     3128 | 2026-03-28 | CYBERSHOKE Prospects | W   | 0.535      | 0.278        | 0.013 (0.002)    | 0.663 (0.098)    | 0 (0.000) |    16.12 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            3 |     3230 | 2026-03-27 | Palace               | W   | 0.526      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.40 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            2 |     5746 | 2026-02-01 | Oxuji                | L   | 0.167      | -            | -                | -                | -         |    -0.23 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |
|            1 |     5761 | 2026-02-01 | Nemesis              | L   | 0.165      | -            | -                | -                | -         |    -0.31 | HUckLer, lesswill, lUMiER, SEMSYS, xsepower |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($677.18)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.542 | $1,250.00      | $677.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
