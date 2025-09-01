### Roster Details<br />
Team Name: kONO<br />
Roster: amster, cptkurtka023, OWNER, s4ltovsk1yy, zogeN<br />
Global Rank: [239](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  516.1<br />
<br />
Final Rank Value (516.1) = Starting Rank Value (513.5) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.5
- 400 + ( ( 0.059 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 513.5


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
|            5 |     1815 | 2025-05-20 | 1win               | L   | 0.506      | -            | -                | -                | -         |    -3.25 | amster, cptkurtka023, OWNER, s4ltovsk1yy, zogeN |
|            4 |     1982 | 2025-05-13 | SPARTA             | L   | 0.460      | -            | -                | -                | -         |    -2.32 | amster, cptkurtka023, OWNER, s4ltovsk1yy, zogeN |
|            3 |     2140 | 2025-05-07 | Imperial Valkyries | W   | 0.420      | 0.389        | 0.034 (0.006)    | 0.107 (0.017)    | 0 (0.000) |    10.78 | amster, cptkurtka023, OWNER, s4ltovsk1yy, zogeN |
|            2 |     2342 | 2025-04-29 | Gentle Mates       | L   | 0.368      | -            | -                | -                | -         |    -0.08 | amster, cptkurtka023, OWNER, s4ltovsk1yy, zogeN |
|            1 |     3399 | 2025-03-24 | informmix          | L   | 0.127      | -            | -                | -                | -         |    -2.60 | amster, cptkurtka023, OWNER, s4ltovsk1yy, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
