### Roster Details<br />
Team Name: Alter Ego<br />
Roster: b1lal, BnTeT, tomiko<br />
Global Rank: [256](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  537.8<br />
<br />
Final Rank Value (537.8) = Starting Rank Value (521.7) + Head To Head Adjustments (16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.7
- 400 + ( ( 0.061 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 521.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2993 | 2025-09-16 | The Huns | L   | 0.459      | -            | -                | -                | -         |    -0.51 | b1lal, BnTeT, Gratisfaction, rate, tomiko |
|            5 |     3016 | 2025-09-15 | SemperFi | W   | 0.452      | 0.769        | 0.015 (0.005)    | 0.323 (0.112)    | 0 (0.000) |    11.93 | b1lal, BnTeT, Gratisfaction, rate, tomiko |
|            4 |     3051 | 2025-09-14 | Beyman   | W   | 0.446      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.68 | b1lal, BnTeT, Gratisfaction, rate, tomiko |
|            3 |     4291 | 2025-08-01 | FlyQuest | L   | 0.152      | -            | -                | -                | -         |    -0.05 | b1lal, BnTeT, ImpressioN, kaito, tomiko   |
|            2 |     4710 | 2025-07-11 | SemperFi | L   | 0.012      | -            | -                | -                | -         |    -0.07 | b1lal, BnTeT, kaito, Ph1NNN, tomiko       |
|            1 |     4719 | 2025-07-10 | Shika    | W   | 0.009      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.10 | b1lal, BnTeT, kaito, Ph1NNN, tomiko       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
