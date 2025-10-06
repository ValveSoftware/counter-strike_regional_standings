### Roster Details<br />
Team Name: ALLINNERS<br />
Roster: Botpa1, demente, noni, wEAVER<br />
Global Rank: [133](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  742.1<br />
<br />
Final Rank Value (742.1) = Starting Rank Value (760.9) + Head To Head Adjustments (-18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.197[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.9
- 400 + ( ( 0.184 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 760.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      215 | 2025-09-27 | NOVAQ    | L   | 1.000      | -            | -                | -                | -         |   -10.10 | Botpa1, buster, demente, noni, wEAVER  |
|            5 |     1012 | 2025-08-31 | NOVAQ    | L   | 0.959      | -            | -                | -                | -         |   -10.48 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            4 |     1018 | 2025-08-31 | DEPO     | W   | 0.959      | 0.333        | 0.004 (0.001)    | 0.039 (0.013)    | 1 (0.959) |    11.98 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            3 |     1021 | 2025-08-31 | AK BARS  | W   | 0.958      | 0.333        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (0.958) |     6.73 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            2 |     1049 | 2025-08-30 | NOVAQ    | L   | 0.952      | -            | -                | -                | -         |   -10.82 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            1 |     2861 | 2025-05-24 | 100PG    | L   | 0.298      | -            | -                | -                | -         |    -6.13 | areokk, demente, kumao, noni, wEAVER   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,248.36)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-27 |      1.000 | $552.00        | $552.00         |
| 2025-08-31 |      0.959 | $2,500.00      | $2,398.59       |
| 2025-05-24 |      0.298 | $1,000.00      | $297.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
