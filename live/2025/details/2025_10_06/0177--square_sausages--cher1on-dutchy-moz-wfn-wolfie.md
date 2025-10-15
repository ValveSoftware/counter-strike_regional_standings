### Roster Details<br />
Team Name: Square Sausages<br />
Roster: Cher1on, Dutchy, moz, wfn, Wolfie<br />
Global Rank: [177](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  622.2<br />
<br />
Final Rank Value (622.2) = Starting Rank Value (660.4) + Head To Head Adjustments (-38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.211[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.4
- 400 + ( ( 0.133 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 660.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       91 | 2025-09-30 | Fire Flux    | L   | 1.000      | -            | -                | -                | -         |   -11.29 | Dutchy, jeyN, moz, swaggy, wfn    |
|           13 |      129 | 2025-09-29 | FORZE Reload | L   | 1.000      | -            | -                | -                | -         |    -6.67 | Dutchy, jeyN, swaggy, wfn, Wolfie |
|           12 |      222 | 2025-09-27 | Dziuseppe    | L   | 1.000      | -            | -                | -                | -         |   -12.17 | Dutchy, jeyN, moz, swaggy, wfn    |
|           11 |      294 | 2025-09-25 | FORZE Reload | L   | 1.000      | -            | -                | -                | -         |    -7.02 | Cher1on, Dutchy, moz, wfn, Wolfie |
|           10 |      653 | 2025-09-13 | NIP Impact   | W   | 1.000      | 0.384        | 0.021 (0.008)    | 0.065 (0.025)    | 0 (0.000) |    15.87 | Cher1on, Dutchy, moz, wfn, Wolfie |
|            9 |     1158 | 2025-08-26 | Max          | L   | 0.928      | -            | -                | -                | -         |    -8.15 | Cher1on, Dutchy, moz, wfn, Wolfie |
|            8 |     2011 | 2025-07-19 | Max          | L   | 0.674      | -            | -                | -                | -         |    -6.22 | Cher1on, Dutchy, moz, wfn, Wolfie |
|            7 |     2024 | 2025-07-19 | AaB          | L   | 0.673      | -            | -                | -                | -         |    -4.42 | Cher1on, Dutchy, moz, wfn, Wolfie |
|            6 |     2052 | 2025-07-18 | bezos bois   | W   | 0.668      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.668) |     3.96 | Cher1on, Dutchy, moz, wfn, Wolfie |
|            5 |     2798 | 2025-05-29 | EYEBALLERS   | L   | 0.333      | -            | -                | -                | -         |    -0.54 | dobbo, Dutchy, moz, Prime, wfn    |
|            4 |     2816 | 2025-05-27 | Eco Warriors | W   | 0.320      | 0.384        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     4.01 | Dutchy, moz, Prime, wfn, Wolfie   |
|            3 |     2991 | 2025-05-18 | ex-SABRE     | L   | 0.259      | -            | -                | -                | -         |    -5.21 | Dutchy, moz, Prime, wfn, Wolfie   |
|            2 |     3055 | 2025-05-15 | Y5           | W   | 0.239      | 0.384        | 0.006 (0.001)    | 0.342 (0.031)    | 0 (0.000) |     4.34 | Dutchy, moz, Prime, wfn, Wolfie   |
|            1 |     3075 | 2025-05-14 | ex-SABRE     | L   | 0.233      | -            | -                | -                | -         |    -4.73 | Dutchy, moz, Prime, wfn, Wolfie   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69.31)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      0.680 | $102.00        | $69.31          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
