### Roster Details<br />
Team Name: megoshort<br />
Roster: aidKiT, b0denmaster, mogv, titulus, Twinkey<br />
Global Rank: [350](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [221]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  488.5<br />
<br />
Final Rank Value (488.5) = Starting Rank Value (498.1) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.1
- 400 + ( ( 0.052 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 498.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1926 | 2026-04-25 | aimclub           | L   | 0.722      | -            | -                | -                | -         |    -2.76 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            6 |     1984 | 2026-04-25 | BASEMENT BOYS     | L   | 0.718      | -            | -                | -                | -         |    -0.94 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            5 |     2033 | 2026-04-24 | bankaPEPSI        | L   | 0.711      | -            | -                | -                | -         |    -6.13 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            4 |     2097 | 2026-04-22 | Aurora Young Blud | L   | 0.699      | -            | -                | -                | -         |    -7.08 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            3 |     2730 | 2026-04-02 | ASTRAL            | L   | 0.567      | -            | -                | -                | -         |    -0.80 | aidKiT, mogv, TIMhehe, titulus, Twinkey     |
|            2 |     3158 | 2026-03-28 | cirahvi           | W   | 0.534      | 0.435        | 0.004 (0.001)    | 0.394 (0.091)    | 0 (0.000) |    13.49 | 2high, aidKiT, robiin, titulus, Twinkey     |
|            1 |     3379 | 2026-03-24 | Persona Grata     | L   | 0.506      | -            | -                | -                | -         |    -5.40 | aidKiT, b0denmaster, mogv, titulus, Twinkey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
