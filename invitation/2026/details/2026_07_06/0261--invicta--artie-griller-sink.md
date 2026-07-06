### Roster Details<br />
Team Name: Invicta<br />
Roster: artie, Griller, SinK<br />
Global Rank: [261](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [169]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  643.7<br />
<br />
Final Rank Value (643.7) = Starting Rank Value (663.1) + Head To Head Adjustments (-19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.1
- 400 + ( ( 0.140 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 663.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      356 | 2026-06-12 | Sashi Academy | L   | 1.000      | -            | -                | -                | -         |    -9.19 | artie, Griller, Meldola, SinK, vigg0 |
|            5 |      362 | 2026-06-12 | Washed        | L   | 1.000      | -            | -                | -                | -         |    -6.79 | artie, Griller, Meldola, SinK, vigg0 |
|            4 |      952 | 2026-05-23 | Strael Bora   | L   | 0.908      | -            | -                | -                | -         |   -11.94 | artie, Griller, SinK, slize, Teelz   |
|            3 |      965 | 2026-05-23 | STATE         | L   | 0.907      | -            | -                | -                | -         |    -2.73 | artie, Griller, SinK, slize, Teelz   |
|            2 |      988 | 2026-05-23 | Fortress      | W   | 0.905      | 0.341        | 0.003 (0.001)    | 0.101 (0.031)    | 1 (0.905) |    18.01 | artie, Griller, SinK, slize, Teelz   |
|            1 |     1936 | 2026-04-25 | Sashi Academy | L   | 0.721      | -            | -                | -                | -         |    -6.73 | artie, Griller, SinK, vigg0, Viggo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($789.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      1.000 | $789.00        | $789.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
