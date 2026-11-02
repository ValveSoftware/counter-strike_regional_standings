### Roster Details<br />
Team Name: EAC EXTRA<br />
Roster: ETYYY, Fallis, GA1De, stesso, Viggo<br />
Global Rank: [352](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [232]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  463.7<br />
<br />
Final Rank Value (463.7) = Starting Rank Value (447.1) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 447.1
- 400 + ( ( 0.025 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 447.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1146 | 2026-10-02 | 9INE          | L   | 0.993      | -            | -                | -                | -         |    -1.20 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            4 |     1166 | 2026-10-02 | MTX           | W   | 0.993      | 0.371        | 0.000 (0.000)    | 0.032 (0.012)    | 1 (0.993) |    19.39 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            3 |     1183 | 2026-10-02 | FOKUS         | L   | 0.993      | -            | -                | -                | -         |    -0.23 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            2 |     1196 | 2026-10-02 | Johnny Speeds | L   | 0.992      | -            | -                | -                | -         |    -1.21 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            1 |     1210 | 2026-10-02 | JiJieHao      | L   | 0.992      | -            | -                | -                | -         |    -0.14 | ETYYY, Fallis, GA1De, stesso, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
