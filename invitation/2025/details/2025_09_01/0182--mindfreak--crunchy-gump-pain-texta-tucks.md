### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Crunchy, gump, pain, Texta, tucks<br />
Global Rank: [182](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [26]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  616.0<br />
<br />
Final Rank Value (616.0) = Starting Rank Value (613.2) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 613.2
- 400 + ( ( 0.111 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 613.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3289 | 2025-03-27 | FURY        | W   | 0.145      | 0.333        | 0.001 (0.000)    | 0.119 (0.006)    | 0 (0.000) |     2.29 | Crunchy, gump, pain, Texta, tucks |
|            4 |     3291 | 2025-03-27 | FURY        | W   | 0.145      | 0.333        | 0.001 (0.000)    | 0.119 (0.006)    | 0 (0.000) |     2.32 | Crunchy, gump, pain, Texta, tucks |
|            3 |     3466 | 2025-03-21 | ex-TALON    | L   | 0.105      | -            | -                | -                | -         |    -1.40 | Crunchy, gump, pain, Texta, tucks |
|            2 |     3468 | 2025-03-21 | Vantage     | W   | 0.104      | 0.345        | 0.000 (0.000)    | 0.007 (0.000)    | 1 (0.104) |     1.06 | Crunchy, gump, pain, Texta, tucks |
|            1 |     3470 | 2025-03-20 | Ground Zero | L   | 0.103      | -            | -                | -                | -         |    -1.47 | Crunchy, gump, pain, Texta, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($797.31)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.399 | $2,000.00      | $797.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
